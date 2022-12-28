# Importing library
import qrcode
 
# Data to be encoded

def qr_code(data,name):
# data = 'https://www.youtube.com/watch?v=cgIfXKgMAS0&list=PLveOHQXne1otYIBVvxqZSdhfSoITxaQtB&index=2'
 
# Encoding data using make() function
  img = qrcode.make(data)
 
# Saving as an image file
  img.save(name)