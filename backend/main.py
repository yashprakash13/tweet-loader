from fastapi import FastAPI
import tweepy
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

API_KEY = os.environ.get("API_KEY")
API_KEY_SECRET = os.environ.get("API_KEY_SECRET")
BEARER_TOKEN = os.environ.get("BEARER_TOKEN")
ACCESS_TOKEN = os.environ.get("ACCESS_TOKEN")
ACCESS_TOKEN_SECRET = os.environ.get("ACCESS_TOKEN_SECRET")


@app.get("/get-user-tweets")
def get_user_tweets():
    client = tweepy.Client(
        bearer_token=BEARER_TOKEN,
        consumer_key=API_KEY,
        consumer_secret=API_KEY_SECRET,
        access_token=ACCESS_TOKEN,
        access_token_secret=ACCESS_TOKEN_SECRET,
        wait_on_rate_limit=False,
    )
    user = client.get_user(username="writes_eve").data.id
    # all_tweets = client.get_users_tweets(id = user, exclude="retweets", max_results=10)
    # print(all_tweets)
    tweets = []
    for response in tweepy.Paginator(
        client.get_users_tweets, id=user, exclude="retweets", max_results=100
    ):
        print(type(response.data))
        tweets.append({"id": response.data[0].id, "text": response.data[0].text})

    return {"all_tweets": tweets}
