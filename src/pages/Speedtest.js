import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import styles from "..//styles/gobal.module.css"
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

function createData(name, calories) {
    return { name, calories };
}

function Speedtest() {
    const navigate = useNavigate();

    const rows = [
        createData('ip', sessionStorage.getItem("ip") ? sessionStorage.getItem("ip") : "--"),
        createData('download speed', sessionStorage.getItem("speed") ? sessionStorage.getItem("speed") : "--"),
        createData('city', sessionStorage.getItem("city") ? sessionStorage.getItem("city") : "--"),
        createData('pin code', sessionStorage.getItem("zip") ? sessionStorage.getItem("zip") : "--"),
        createData('telecom', sessionStorage.getItem("comp") ? sessionStorage.getItem("comp") : "--"),
    ];

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
                <SpeedOutlinedIcon sx={{
                    fontSize: "200px"
                }} />
                <Typography variant="h6" color="initial" sx={{
                    fontSize: "30px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    m: 1,
                    textAlign: "center"
                }}>SpeedTest</Typography>

                <Button sx={{
                    fontSize: "20px",
                    fontFamily: " 'Montserrat', sans-serif",
                    p: 2,
                    backgroundColor: "#1B2028",
                    color: "white",
                    borderRadius: "10px",
                    border: 2,

                }} className={styles.box_btn} onClick={() => {
                    navigate("/speed_gif")
                }}>Start SpeedTest</Button>
                <Box sx={{
                    m: 1,
                    mt: 2,
                    p: 1,
                }}>
                    <Typography variant="h6" color="initial" sx={{
                        fontSize: "30px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: "600",
                        m: 1,
                        textAlign: "center",
                        color: "green"
                    }}>Result</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Content </TableCell>
                                    <TableCell align="right">Result</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            </Box>
        </>
    )
}

export default Speedtest