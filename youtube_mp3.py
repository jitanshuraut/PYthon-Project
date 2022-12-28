import pytube
from pytube import YouTube


def mp3(data,name):
    myStream = YouTube(data).streams.last()
    myStream.download(name)