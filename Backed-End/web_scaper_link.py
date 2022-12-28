
import requests
from bs4 import BeautifulSoup
 
 

def web_sclink(data): 
# Making a GET request
 r = requests.get(data)
 
# Parsing the HTML
 soup = BeautifulSoup(r.content, 'html.parser')
 ans=[]
# find all the anchor tags with "href"
 for link in soup.find_all('a'):
    ans.append(link.get('href'))

 return ans   

