from dotenv import load_dotenv
from fastapi import FastAPI

load_dotenv()

from modules.get_tweets import get_user_tweets

app = FastAPI()


@app.get("/get-user-tweets/{username}")
def get_tweets_from_user(username: str):
    to_send = get_user_tweets(username=username)
    return to_send
