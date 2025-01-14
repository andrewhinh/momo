import os
from pathlib import Path

import modal
import openai
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")


def get_app():
    f_app = FastAPI()

    @f_app.get("/")
    def index() -> str:
        return "What you want?"

    class Input(BaseModel):
        messages: list[dict]

    @f_app.post("/chat")
    def chat(request: Input) -> str:
        messages = request.messages
        if not messages:
            raise HTTPException(status_code=400, detail="Empty messages")
        response = (
            openai.ChatCompletion.create(model="gpt-3.5-turbo-1106", messages=messages)
            .choices[0]
            .message.content
        )
        if not response:
            raise HTTPException(status_code=400, detail="Empty response")
        return response

    return f_app


NAME = "momo"
PARENT_PATH = Path(__file__).parent
SECRETS = [modal.Secret.from_dotenv(path=PARENT_PATH)]
PYTHON_VERSION = "3.12"

IMAGE = modal.Image.debian_slim(
    python_version=PYTHON_VERSION
).pip_install(  # add Python dependencies
    "openai==1.59.7",
    "fastapi==0.115.6",
    "python-dotenv==1.0.1",
)

MINUTES = 60  # seconds
API_TIMEOUT = 1 * MINUTES
API_CONTAINER_IDLE_TIMEOUT = 15 * MINUTES  # max
API_ALLOW_CONCURRENT_INPUTS = 1000  # max

APP_NAME = f"{NAME}-api"
app = modal.App(name=APP_NAME)


@app.function(
    image=IMAGE,
    secrets=SECRETS,
    timeout=API_TIMEOUT,
    container_idle_timeout=API_CONTAINER_IDLE_TIMEOUT,
    allow_concurrent_inputs=API_ALLOW_CONCURRENT_INPUTS,
)
@modal.asgi_app()
def modal_get():  # noqa: C901
    return get_app()


if __name__ == "__main__":
    import uvicorn
    f_app = get_app()
    uvicorn.run("app:f_app", host="0.0.0.0", reload=True)
