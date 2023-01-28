import os
import pickle
from typing import List

import tweepy
from modules.models.tweet_model import TweetModel
from pydantic import parse_obj_as

API_KEY = os.environ.get("API_KEY")
API_KEY_SECRET = os.environ.get("API_KEY_SECRET")
BEARER_TOKEN = os.environ.get("BEARER_TOKEN")
ACCESS_TOKEN = os.environ.get("ACCESS_TOKEN")
ACCESS_TOKEN_SECRET = os.environ.get("ACCESS_TOKEN_SECRET")


async def get_user_tweets(username: str) -> List[TweetModel]:
    client = tweepy.Client(
        bearer_token=BEARER_TOKEN,
        consumer_key=API_KEY,
        consumer_secret=API_KEY_SECRET,
        access_token=ACCESS_TOKEN,
        access_token_secret=ACCESS_TOKEN_SECRET,
        wait_on_rate_limit=False,
    )
    # first check in stored pickles
    if f"{username}.pickle" in os.listdir("modules/tempdata"):
        print("Found in cache!")
        with open(f"modules/tempdata/{username}.pickle", "rb") as f:
            all_tweets = pickle.load(f)
        return all_tweets
    else:
        user = client.get_user(username=username).data.id
        # all_tweets = client.get_users_tweets(id = user, exclude="retweets", max_results=10)
        all_tweets = []
        for response in tweepy.Paginator(
            client.get_users_tweets, id=user, exclude="retweets", max_results=100
        ):
            all_tweets.extend(parse_obj_as(List[TweetModel], response.data))
        # save as pickle for later use
        with open(f"modules/tempdata/{username}.pickle", "wb") as f:
            pickle.dump(all_tweets, f)
        return all_tweets
