# Backend Server

A backend server for the website that implements a /chat endpoint.

## Setup

1. Setup:

    ```bash
    uv sync
    ```

2. Using `.env.template` as reference, create a `.env` file with your [OpenAI API key](https://beta.openai.com/account/api-keys).

3. Run the server:

    ```bash
    uv run app.py
    ```

4. Deploy on Modal:

    ```bash
    modal deploy --env main app.py
    ```
