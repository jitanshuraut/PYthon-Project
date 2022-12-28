import speedtest

def download_speed():
 sp=speedtest.Speedtest()
 sp.get_servers()
 down=str(round(sp.download()/(10**6),3))+"mbps"
 return(down)