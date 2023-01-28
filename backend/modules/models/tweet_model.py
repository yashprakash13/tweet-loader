from pydantic import BaseModel


class TweetModel(BaseModel):
    id: int
    text: str
