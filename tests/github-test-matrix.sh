#!/bin/bash

# Creates a matrix of roles testable by Molecule for GitHub Actions to use

roles=()
for f in ./roles/*; do
  if [[ -d "$f/molecule" ]]; then
    roles+=("$f")
  fi
done

# Sort roles alphabetically using mapfile
mapfile -t sorted_roles < <(printf "%s\n" "${roles[@]}" | sort)

# Split roles into two groups
half=$(( (${#sorted_roles[@]} + 1) / 2 ))
group1=("${sorted_roles[@]:0:$half}")
group2=("${sorted_roles[@]:$half}")

# Determine which group to run based on the week number
week=$(date +%V)
if (( week % 2 == 0 )); then
  test_matrix="${group1[*]}"
else
  test_matrix="${group2[*]}"
fi

# Output the matrix in JSON format
echo "matrix=$(echo "$test_matrix" | jq -R -s -c 'split(" ")')" >> "$GITHUB_OUTPUT"
