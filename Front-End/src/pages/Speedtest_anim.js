import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Speedtest_anim() {
  const navigate = useNavigate();
  let w = window.innerWidth
  let h = window.innerHeight
  const [ip, setip] = useState("")


  const fetchData_ip = () => {
    return fetch("http://ip-api.com/json/?fields=61439")
      .then((response) => response.json())
      .then((data) => {
        setip(data)
        console.log(data)
        sessionStorage.setItem("ip", data.query);
        sessionStorage.setItem("city", data.city);
        sessionStorage.setItem("comp", data.org);
        sessionStorage.setItem("zip", data.zip);



      });
  }
  console.log("data")
  console.log(ip.query)
  const fetchData_speed = () => {
    return fetch("http://127.0.0.1:5000/speedtest")
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("speed", data.speed);
        console.log(data)
      });
  }
  useEffect(() => {

    fetchData_ip();
    fetchData_speed();

    setTimeout(function () {
      navigate("/speedtest")
    }, 15000);
  }, [])
  return (

    <>
      <Box sx={{
        display: "flex",
        backgroundColor: "black",
        justifyContent: "center"
      }}>
        <img src="spe_gif.gif" style={{ height: h, objectFit: "contain" }} alt="" />
      </Box>
    </>
  )
}

export default Speedtest_anim



