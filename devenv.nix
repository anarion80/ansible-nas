{
  pkgs,
  lib,
  config,
  ...
}: {
  name = "ansible-nas";

  # https://devenv.sh/basics/
  env = {
    GREET = "ansible-nas devenv";
  };

  # https://devenv.sh/packages/
  packages = [
    pkgs.git
  ];

  # https://devenv.sh/languages/
  languages = {
    python = {
      enable = true;
      version = "3.13";
      uv.enable = true;
      uv.sync.enable = true;
      venv.enable = true;
    };
    ansible = {
      enable = true;
    };
  };

  enterShell = ''
    echo Entering development environment for ansible-nas...
    echo
    echo 🦾 Available scripts:
    echo 🦾
    ${pkgs.gnused}/bin/sed -e 's| |••|g' -e 's|=| |' <<EOF | ${pkgs.util-linuxMinimal}/bin/column -t | ${pkgs.gnused}/bin/sed -e 's|^|🦾 |' -e 's|••| |g'
    ${lib.generators.toKeyValue {} (lib.mapAttrs (name: value: value.description) config.scripts)}
    EOF
    echo
  '';

  scripts.setup = {
    exec = ''
      echo '🛠️ Running setup'
      uv sync
    '';
    description = "Install dependencies";
  };

  scripts.run = {
    exec = ''
      # Initialize variables
      tag=""
      host=""

      # Function to display usage
      usage() {
          echo "Usage: $0 [-t|--tag <tag>] [-h|--host <host>]"
          echo "Options:"
          echo "  -t, --tag   Specify the Ansible tag"
          echo "  -H, --host  Specify the target host"
          echo "  -h, --help  Show this help message"
          exit 1
      }

      # Parse named arguments
      while [[ "$#" -gt 0 ]]; do
          case $1 in
              -t|--tag) tag="$2"; shift ;;
              -H|--host) host="$2"; shift ;;
              -h|--help) usage ;;
              *) echo "Unknown parameter: $1"; usage ;;
          esac
          shift
      done

      # Base command
      cmd="ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K"

      # Echo the run message
      echo '🏃 Run Playbook'

      # Add tag if provided
      if [ ! -z "$tag" ]; then
          cmd="$cmd -t $tag"
      fi

      # Add host limit if provided
      if [ ! -z "$host" ]; then
          cmd="$cmd --limit $host"
      fi

      # Print the command being executed (optional, for debugging)
      echo "Executing: $cmd"

      # Execute the command
      eval $cmd
    '';
    description = "Run Playbook (add '-t tag' to only run certain role, and '-H host' to limit the playbook run to only that host from your inventory";
  };

  scripts.check = {
    exec = ''
      echo '🏃 Run Playbook Syntax Check'
      ansible-playbook -i inventory nas.yml --syntax-check
    '';
    description = "Run Playbook Syntax Check";
  };

  scripts.precommit = {
    exec = ''
      echo '🏃 Run pre-commit checks'
      pre-commit run --all-files
    '';
    description = "Run pre-commit checks";
  };

  scripts.pytest = {
    exec = ''
      echo '🏃 Run pytest'
      pytest --molecule-base-config=../../tests/molecule/base.yml
    '';
    description = "Run pytest";
  };

  scripts.roletest = {
    exec = ''
      # Initialize variables
      role=""

      # Function to display usage
      usage() {
          echo "Usage: $0 [-r|--role <role>]"
          echo "Options:"
          echo "  -r, --role  Specify the role to test (required)"
          echo "  -h, --help  Show this help message"
          exit 1
      }

      # Parse named arguments
      while [[ "$#" -gt 0 ]]; do
          case $1 in
              -r|--role) role="$2"; shift ;;
              -h|--help) usage ;;
              *) echo "Unknown parameter: $1"; usage ;;
          esac
          shift
      done

      # Check if tag is provided
      if [ -z "$role" ]; then
        echo "Error: Role parameter is required"
        usage
      fi

      # Base command
      cmd="molecule -c ../../tests/molecule/base.yml test"

      # Echo the run message
      echo '🏃 Running Molecule Tests'

      # Add role if provided
      if [ ! -z "$role" ]; then
          cd roles/$role
      fi

      # Print the command being executed (optional, for debugging)
      echo "Executing: $cmd"

      # Execute the command
      eval $cmd

      # Go back to root
      if [ ! -z "$role" ]; then
        cd ../../
      fi

    '';
    description = "Run molecule role test (provide '-r role')";
  };
}
