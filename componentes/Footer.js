import React from 'react'
import {Box, Typography, Link } from '@mui/material';

const Footer = ()=>{
    return(
        <footer>

            <Box sx={{
                height: "200px",
                width: "100%",
                backgroundColor: "#222"
                
            }}>

             <Typography sx={{
                color:"#fff",
                fontSize: "20px",
                textAlign:"center",
                padding:"10px 0"

             }}>&copy; Todos los Derechos Reservados | Apple - 2022</Typography>

             <Box sx={{
                margin:"10px 0", fontSize: "20px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"
             }}>
             <Link href="#" color="#fff">Instagram</Link>
             <Link href="#" color="#fff">Facebook</Link>
             <Link href="#" color="#fff">Twitter</Link>
             <Link href="#" color="#fff">Linkedin</Link>

             </Box>
            </Box>

        </footer>
    )
}

export default Footer