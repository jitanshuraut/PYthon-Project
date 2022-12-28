import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PublicOffOutlinedIcon from '@mui/icons-material/PublicOffOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import styles from "..//styles/gobal.module.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1B2028",
                color: "white"

            }}>

                <Box sx={{
                    m: 2,
                    display: "flex",
                    alignItems: "center",

                }}>

                    <img src="logo_py.png" alt="" style={{ borderRadius: "50%", width: "20%" }} />
                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        color: "white"
                    }}>  <Link to="/" style={{ color: "white", textDecoration: "none" }}>Py-Project</Link></Typography>

                </Box>
                <Link to="/speedtest" style={{ color: "white", textDecoration: "none" }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "15px",
                        p: 1,
                        mx: 2

                    }} className={styles.box} >

                        <SpeedOutlinedIcon />
                        <Typography variant="h6" sx={{
                            m: 1,
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: " 'Montserrat', sans-serif",
                            color: "white"
                        }} color="initial">SpeedTest</Typography>

                    </Box>
                </Link>
                <Link to="/qrcode" style={{ color: "white", textDecoration: "none" }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "15px",
                        p: 1,
                        mx: 2

                    }} className={styles.box} >
                        <QrCode2OutlinedIcon />
                        <Typography variant="h6" sx={{
                            m: 1,
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: " 'Montserrat', sans-serif",
                            color: "white"
                        }} color="initial">QRcode.</Typography>
                    </Box>
                </Link>
                <Link to="/webscapper" style={{ color: "white", textDecoration: "none" }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "15px",
                        p: 1,
                        mx: 2

                    }} className={styles.box}>
                        <LanguageOutlinedIcon />
                        <Typography variant="h6" sx={{
                            m: 1,
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: " 'Montserrat', sans-serif",
                            color: "white"
                        }} color="initial">WEBscaper</Typography>
                    </Box>
                </Link>
                <Link to="/webblocker" style={{ color: "white", textDecoration: "none" }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "15px",
                        p: 1,
                        mx: 2

                    }} className={styles.box} >
                        <PublicOffOutlinedIcon />
                        <Typography variant="h6" sx={{
                            m: 1,
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: " 'Montserrat', sans-serif",
                            color: "white"
                        }} color="initial">WEBSite Blocker</Typography>
                    </Box>

                </Link>
                <Link to="/youtubemp3" style={{ color: "white", textDecoration: "none" }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "15px",
                        p: 1,
                        mx: 2

                    }} className={styles.box} >
                        <LibraryMusicOutlinedIcon />
                        <Typography variant="h6" sx={{
                            m: 1,
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: " 'Montserrat', sans-serif",
                            color: "white"
                        }} color="initial">YOUTube MP3</Typography>
                    </Box>
                </Link>
                <Link to="/pdfencp" style={{ color: "white", textDecoration: "none" }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "15px",
                        p: 1,
                        mx: 2

                    }} className={styles.box} >
                        <PictureAsPdfOutlinedIcon />
                        <Typography variant="h6" sx={{
                            m: 1,
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: " 'Montserrat', sans-serif",
                            color: "white"
                        }} color="initial">PDF Encryption</Typography>
                    </Box>
                </Link>


            </Box>


        </>
    )
}

export default Navbar