from flask import Flask,request
from flask_cors import CORS
from flask import jsonify
from speedtest_fun import download_speed
from qrcode_1 import qr_code
from youtube_mp3 import mp3
from pdf_enc import encp
from web_scapper import web_scp
from web_scaper_link import web_sclink


app = Flask(__name__)
CORS(app)

@app.route("/")
def tes():
    ans=download_speed()
    return jsonify(speed="hello")

@app.route("/speedtest")
def spd():
    ans=download_speed()
    return jsonify(speed=ans)


@app.route("/qrcode")
def qrd():
    data = request.args.get('data')
    name = (request.args.get('name'))
    qr_code(data,name)
    return jsonify(resp="success")    


@app.route("/ytmp3")
def ytmp3():
    data = request.args.get('data')
    name = (request.args.get('name'))
    mp3(data,name)
    return jsonify(resp="success") 


@app.route("/pdfencp")
def pdfencp():
    data = request.args.get('data')
    name = (request.args.get('name'))
    encp(data,name)
    return jsonify(resp="success")

@app.route("/webscper")
def websp():
    link = request.args.get('link')
    element = (request.args.get('element'))
    classes = (request.args.get('classes'))
    ans_ele=web_scp(link,element,classes)
    return (ans_ele)     


@app.route("/webscperLINK")
def webspLINK():
    link = request.args.get('link')
    
    
    ans_=web_sclink(link)
    return (ans_)  


if __name__ == "__main__":
    app.run(debug=True)
