import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import styles from "..//styles/gobal.module.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function WEBscaper() {
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
                <LanguageOutlinedIcon sx={{
                    fontSize: "200px"
                }} />
                <Typography variant="h6" color="initial" sx={{
                    fontSize: "30px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    m: 1,
                    textAlign: "center"
                }}>WEBscapper</Typography>



                <TextField id="outlined-basic" label="URL" variant="outlined" sx={{
                    width: "70%",
                    m: 2
                }} />
                <TextField id="outlined-basic" label="ELEMENT" variant="outlined" sx={{
                    width: "70%",
                    m: 2
                }} />
                <Button sx={{
                    fontSize: "20px",
                    fontFamily: " 'Montserrat', sans-serif",
                    p: 2,
                    backgroundColor: "#1B2028",
                    color: "white",
                    borderRadius: "10px",
                    border: 2,

                }} className={styles.box_btn} onClick={() => {

                }}>
                    Scappe</Button>


            </Box>
        </>
    )
}

export default WEBscaper