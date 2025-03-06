# Full Stack Chat Application

This is a simple chat application built with FastAPI and PostgreSQL. It includes user authentication and allows users to join a chat room and send messages in real-time.

## Features

- User authentication with JWT tokens
- Real-time chat using WebSockets
- PostgreSQL database for storing user information

## Requirements

- Python 3.7+
- PostgreSQL

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/full-stack-api.git
    cd full-stack-api
    ```

2. Create a virtual environment and activate it:

    ```sh
    python -m venv venv
    source venv/bin/activate  
     # For Windows, use `venv\Scripts\activate`
    ```

3. Install the dependencies:

    ```sh
    pip install -r requirements.txt
    ```

4. Set up the PostgreSQL database by creating a .env file like this

    ```python
    DATABASE_URL = "postgresql://user:password@localhost/dbname"
    SECRET_KEY="whateveryoursecretkeyis"
    ```

5. Run the FastAPI application:

    ```sh
    uvicorn main:app --reload
    ```

6. Open your browser and navigate to `http://127.0.0.1:8000/static/index.html` to access the chat application.

## Usage

1. Register a new user or use the existing user credentials to log in.
2. After logging in, you will be redirected to the chat room.
3. Type a message in the input box and click "Send" to send a message to the chat room.

## Project Structure

- `main.py`: The main entry point of the application.
- `database.py`: Database connection and models.
- `routers/auth.py`: User authentication routes.
- `routers/chat.py`: Chat functionality using WebSockets.
- `static/index.html`: Frontend for the chat application.

## License

This project is licensed under the MIT License.