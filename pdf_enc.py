import pikepdf


def encp(data,name):
    old_file=pikepdf.Pdf.open(data,allow_overwriting_input=True)
    no_extr=pikepdf.Permissions(extract=False)

    old_file.save(data,
               encryption=pikepdf.Encryption(user=name,
                                              owner="jitanshu",
                                              allow=no_extr))