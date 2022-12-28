import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from "..//styles/gobal.module.css"
import StormIcon from '@mui/icons-material/Storm';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <hr className={styles.hr} />
            <Box sx={{
                display: "flex",
                flexDirection: "column",

                width: "80%",
                margin: "auto",
                mt: 2,
            }}>
                <img src="logo_py.png" alt="" style={{ margin: "auto" }} />
                <Typography variant="h6" color="initial" sx={{
                    fontSize: "30px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    m: 1,
                    textAlign: "center"
                }}>Python-Project</Typography>

                <Typography variant="h6" color="initial" sx={{
                    fontSize: "20px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    m: 1,
                    textAlign: "center"
                }}>
                    Hi,🖐️ there My self jitanshu raut, this is my first project where I used  flask as backed and React js as frontend
                    in this project, I combine small projects of python
                    <br></br>
                    <br></br>
                    I used some of the best libraries of python

                </Typography>
                <Typography variant="h6" color="initial" sx={{
                    fontSize: "20px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",

                    textAlign: "center",
                    borderRadius: "10px",
                    border: 1,
                    p: 2,
                    width: "50%",
                    margin: "auto",
                    mt: 2,
                    mb: 2



                }}>Convert .py File to .exe  <Link to="/pytoexe" style={{ color: "white", textDecoration: "none" }}><span className={styles.lib_st}><StormIcon />PYtoEXE</span></Link></Typography>



                <Typography variant="h6" color="initial" sx={{
                    fontSize: "20px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",

                    textAlign: "start",
                    backgroundColor: "#3A6FF8",
                    width: "40%",
                    borderRadius: "10px",
                    margin: "auto",
                    mt: 1,
                    color: "white",
                    p: 2

                }}>
                    <br />
                    SpeedTest Library - <span className={styles.lib}>speedtest-cli 2.1.3</span>
                    <hr />
                    <br />


                    QRcode Library -<span className={styles.lib}> qrcode 7.3.1</span>
                    <hr />
                    <br />

                    WEBscaper Library - <span className={styles.lib}>Beautiful Soup</span>
                    <hr />
                    <br />

                    YOUTube MP3 Library - <span className={styles.lib}>pytube</span>
                    <hr />
                    <br />

                    PDF Encryption -<span className={styles.lib}>speedtest-cli 2.1.3</span>
                    <hr />


                </Typography>


            </Box>

        </>
    )
}

export default Home