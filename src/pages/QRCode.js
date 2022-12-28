import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import styles from "..//styles/gobal.module.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function QRCode() {

    const [in_data, setin_data] = useState("")
    const [in_name, setin_name] = useState("")
    const [result_hei, setresult_hei] = useState(0)
    const [padd, setpadd] = useState(0)

    function genqr(data, name) {
        setresult_hei("50px")
        setpadd(1)
        fetch(`http://127.0.0.1:5000/qrcode?data=${data}&name=C:\\Users\\lenovo\\Desktop\\E_X_T_R_A\\java_sc\\REACT JS\\PYTHON_PRO\\client\\pypro\\public\\${name}`)
            .then((response) => response.json())
            .then((data) => {

                console.log(data)
            });

    }

    return (
        <>
            <hr className={styles.hr} />
            <Box sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "green",
                color: "white",
                p: padd,
                borderRadius: "10px",
                width: "70%",
                margin: "auto",
                height: `${result_hei == 0 ? 0 : result_hei - 49}px`
            }}>
                <CheckCircleIcon sx={{
                    height: `${result_hei == 0 ? 0 : result_hei - 49}px`
                }} />
                <Typography variant="h6" color="initial" sx={{
                    fontSize: "20px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    m: 1,
                    textAlign: "center",
                    color: "white",
                    height: `${result_hei == 0 ? 0 : result_hei - 40}px`
                }}>successfuly created qr code !</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
                margin: "auto",
                mt: 2,
            }}>
                <QrCode2OutlinedIcon sx={{
                    fontSize: "200px"
                }} />
                <Typography variant="h6" color="initial" sx={{
                    fontSize: "30px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    m: 1,
                    textAlign: "center"
                }}>QRCode</Typography>



                <TextField id="outlined-basic" label="URL" variant="outlined" sx={{
                    width: "70%",
                    m: 2
                }} onChange={(newValue) => setin_data(newValue.target.value)} />
                <TextField id="outlined-basic" label="PATH WHERE YOU HAVE TO STORE PNG" variant="outlined" sx={{
                    width: "70%",
                    m: 2
                }} onChange={(newValue) => setin_name(newValue.target.value)} />
                <Button sx={{
                    fontSize: "20px",
                    fontFamily: " 'Montserrat', sans-serif",
                    p: 2,
                    backgroundColor: "#1B2028",
                    color: "white",
                    borderRadius: "10px",
                    border: 2,

                }} className={styles.box_btn} onClick={() => {
                    genqr(in_data, in_name)
                }}>
                    Generate</Button>
                <Box>
                    <img src={in_name} alt="" />
                </Box>


            </Box>
        </>
    )
}

export default QRCode