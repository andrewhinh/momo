# Frontend App

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/andrewhinh/momo.git
    cd momo/frontend
    ```

2. Install node packages:

    ```bash
    npm i
    ```

3. Using `.env.template` as reference, create a `.env` file with the backend URL.

## Development

To run jest tests:

```bash
npm test
```

To run the app locally:

```bash
npm start
```

To create a production build:

```bash
npm run build
```

To push to GH pages:

```bash
cd ..
git subtree push --prefix frontend/dist origin gh-pages
cd frontend
```
