from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_pagination import Page, add_pagination, paginate
from modules.models.tweet_model import TweetModel

load_dotenv()

from modules.get_tweets import get_user_tweets

app = FastAPI(title="Tweet Loader API")

origins = [
    "http://localhost:3000",
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/get-user-tweets/{username}", response_model=Page[TweetModel])
async def get_tweets_from_user(username: str):
    to_send = await get_user_tweets(username=username)
    return paginate(to_send)


add_pagination(app)
