---
sidebar_position: 140
---

# Presenton

[Presenton](https://github.com/presenton/presenton) is an AI-powered presentation generator that helps you create stunning presentations using artificial intelligence.

## Variables

| Variable                         | Description                          | Default                              |
| :------------------------------- | :----------------------------------- | :----------------------------------- |
| `presenton_enabled`              | Enable Presenton                     | `false`                              |
| `presenton_available_externally` | Allow external access to Presenton   | `false`                              |
| `presenton_data_directory`       | Directory to store Presenton data    | `"{{ docker_home }}/presenton"`      |
| `presenton_port`                 | Presenton port                       | `"6001"`                             |
| `presenton_hostname`             | Presenton hostname                   | `"presenton"`                        |
| `presenton_memory`               | Memory limit for Presenton container | `2g`                                 |
| `presenton_container_name`       | Name for the Presenton container     | `presenton`                          |
| `presenton_image`                | Docker image to use for Presenton    | `ghcr.io/presenton/presenton:latest` |

## Environment Variables

| Variable                               | Description                   | Default    |
| :------------------------------------- | :---------------------------- | :--------- |
| `presenton_can_change_keys`            | Can change API keys           | `"false"`  |
| `presenton_llm`                        | LLM to use                    | `"openai"` |
| `presenton_openai_api_key`             | OpenAI API Key                | `""`       |
| `presenton_openai_model`               | OpenAI Model                  | `""`       |
| `presenton_google_api_key`             | Google API key                | `""`       |
| `presenton_google_model`               | Google Model                  | `""`       |
| `presenton_anthropic_api_key`          | Anthropic API key             | `""`       |
| `presenton_anthropic_model`            | Anthropic Model               | `""`       |
| `presenton_ollama_url`                 | Ollama URL                    | `""`       |
| `presenton_ollama_model`               | Ollama Model                  | `""`       |
| `presenton_custom_llm_url`             | Custom LLM URL                | `""`       |
| `presenton_custom_llm_api_key`         | Custom LLM API Key            | `""`       |
| `presenton_custom_model`               | Custom Model                  | `""`       |
| `presenton_pexels_api_key`             | Pexels API Key                | `""`       |
| `presenton_tool_calls`                 | Enable tool calls             | `"true"`   |
| `presenton_disable_thinking`           | Disable thinking              | `"false"`  |
| `presenton_web_grounding`              | Enable web grounding          | `"false"`  |
| `presenton_database_url`               | Database URL                  | `""`       |
| `presenton_disable_anonymous_tracking` | Disable anonymous tracking    | `"false"`  |
| `presenton_comfyui_url`                | ComfyUI URL                   | `""`       |
| `presenton_comfyui_workflow`           | ComfyUI Workflow              | `""`       |
| `presenton_disable_image_generation`   | Disable image generation      | `"false"`  |
| `presenton_pixabay_api_key`            | Pixabay API Key               | `""`       |
| `presenton_dall_e_3_quality`           | DALL-E 3 quality setting      | `""`       |
| `presenton_gpt_image_1_5_quality`      | GPT Image 1.5 quality setting | `""`       |
| `presenton_image_provider`             | Image provider                | `""`       |
