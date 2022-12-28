import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from "..//styles/gobal.module.css"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import StormIcon from '@mui/icons-material/Storm';

function PytoEXE() {
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
                <StormIcon sx={{
                    fontSize: "200px"
                }} />
                <Typography variant="h6" color="initial" sx={{
                    fontSize: "30px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    m: 1,
                    textAlign: "center"
                }}>PY to EXE</Typography>


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
                        }}>First of all, we need administrator permission to convert to .exe file</Typography>
                    </Box>


                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "center",

                    }}>So, I will tell you the step that you follow to convert it to .exe file</Typography>

                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        borderRadius: "10px",
                        textAlign: "start",
                        p: 2,
                        border: 1

                    }}><span className={styles.lib_st}>Step1:</span> pip install pyinstaller</Typography>

                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "start",
                        borderRadius: "10px",
                        p: 2,
                        border: 1

                    }}><span className={styles.lib_st}>Step2:</span> Basic usage is very simple, just run it against your main script:pyinstaller /path/to/yourscript.py</Typography>

                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "start",
                        borderRadius: "10px",
                        border: 1,
                        p: 2


                    }}><span className={styles.lib_st}>Step3:</span> To bundle your project into a single file, you can build with a command like this: pyinstaller cli.py --onefile</Typography>


                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "start",
                        borderRadius: "10px",
                        border: 1,
                        p: 2

                    }}><span className={styles.lib_st}>EXAMPLE:</span>
                        <br />
                        <br />
                        <span className={styles.lib_st}> pyinstaller cli.py --onefile</span>
                        <br />
                        <br />
                        <span className={styles.lib_st}>pyinstaller /path/to/yourscript.py</span>
                    </Typography>

                </Box>




            </Box>
        </>
    )
}

export default PytoEXE