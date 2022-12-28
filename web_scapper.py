import requests
from bs4 import BeautifulSoup
import numpy as np
from array import array
 
 
def web_scp(link,element,classes):

# Making a GET request
 r = requests.get(link)
 
# Parsing the HTML
 soup = BeautifulSoup(r.content, 'html.parser')
 
 s = soup.find(element, class_=classes)
#  ans=[]
# # find all the anchor tags with "href"
#  for link in s:
#     ans.append(link)
# content = s.find_all('p')
 
 return( s)



# web_scp("https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en","div","")