# Backend Server

A backend server for the website that implements a /chat endpoint.

## Setup

1. Install conda if necessary:

    ```bash
    # Install conda: https://conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation
    # If on Windows, install chocolately: https://chocolatey.org/install. Then, run:
    # choco install make
    ```

2. Clone the repository:

    ```bash
    git clone https://github.com/andrewhinh/momo.git
    cd momo
    ```

3. Create the conda environment locally:

    ```bash
    cd backend
    conda env update --prune -f environment.yml
    conda activate momo
    pip install -r requirements.txt
    export PYTHONPATH=.
    echo "export PYTHONPATH=.:$PYTHONPATH" >> ~/.bashrc (or ~/.zshrc)
    # If on Windows, the last two lines probably won't work. Check out this guide for more info: https://datatofish.com/add-python-to-windows-path/
    ```

4. Using `.env.template` as reference, create a `.env` file with your [OpenAI API key](https://beta.openai.com/account/api-keys).

5. Run the server:

    ```bash
    gunicorn -w 4 -b 0.0.0.0 'server:app'
    ```
