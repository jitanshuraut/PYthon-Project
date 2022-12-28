import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PublicOffOutlinedIcon from '@mui/icons-material/PublicOffOutlined';
import styles from "..//styles/gobal.module.css"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function WEBblocker() {
    return (
        <>
            <hr className={styles.hr} />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
                margin: "auto",
                mt: 2,
            }}>
                <PublicOffOutlinedIcon sx={{
                    fontSize: "200px"
                }} />
                <Typography variant="h6" color="initial" sx={{
                    fontSize: "30px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    m: 1,
                    textAlign: "center"
                }}>WEB blocker</Typography>


                <Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#E92121",
                        color: "white",
                        p: 1,
                        borderRadius: "10px"
                    }}>
                        <WarningAmberIcon />
                        <Typography variant="h6" color="initial" sx={{
                            fontSize: "20px",
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: "600",
                            m: 1,
                            textAlign: "center",
                            color: "white"
                        }}>First of all, we need administrator permission to block the website</Typography>
                    </Box>


                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "center",

                    }}>So, I will tell you the step that you follow to block the website</Typography>

                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        borderRadius: "10px",
                        textAlign: "start",
                        p: 2,
                        border: 1

                    }}><span className={styles.lib_st}>Step1:</span> open notepad in administrator mode</Typography>

                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "start",
                        borderRadius: "10px",
                        p: 2,
                        border: 1

                    }}><span className={styles.lib_st}>Step2:</span> Go to this directory C:\Windows\System32\drivers\etc</Typography>

                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "start",
                        borderRadius: "10px",
                        border: 1,
                        p: 2


                    }}><span className={styles.lib_st}>Step3:</span>  In note pad by default, you have selected the txt file so instead of the txt file select all file</Typography>
                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "start",
                        borderRadius: "10px",
                        border: 1,
                        p: 2

                    }}><span className={styles.lib_st}>Step4:</span> Open file named as hosts and paste 127.0.0.1  (url of website) at the end</Typography>


                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "start",
                        borderRadius: "10px",
                        border: 1,
                        p: 2

                    }}><span className={styles.lib_st}>EXAMPLE:</span> I want to block facebook , so i will write it as

                        <span className={styles.lib_st}> 127.0.0.1 www.facebook.com</span>

                        <span className={styles.lib_st}>  127.0.0.1 facebook.com </span>
                    </Typography>

                </Box>




            </Box>
        </>
    )
}

export default WEBblocker