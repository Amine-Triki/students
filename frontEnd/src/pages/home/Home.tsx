import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";

import AmineTrikiImg from "../../assets/amine triki.webp";


import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import React from "react";


const MotionAnchor = motion.a;

const iconStyle = {
    fontSize: 40,
    color: "primary.main",
    "&:hover": {
        color: "secondary.main",
        cursor: "pointer",
    },
};

const socialLinks = [
    {icon: <GitHubIcon/>, url: "https://github.com/Amine-Triki"},
    {icon: <LinkedInIcon/>, url: "https://www.linkedin.com/in/amine-triki-tn/"},
    {icon: <FacebookIcon/>, url: "https://www.facebook.com/amine.triki.1998"},
    {icon: <YouTubeIcon/>, url: "https://www.youtube.com/@aminetrikitv"},
    {icon: <XIcon/>, url: "https://x.com/Mr_Amine_Triki"},
    {icon: <InstagramIcon/>, url: "https://www.instagram.com/mr_amine_triki/"},
];

const Home = () => {
    return (
        <main>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 5,
                }}
            >
                <Box sx={{
                    maxWidth: {
                        xs: 300,
                        sm: 350,
                        md: 400,
                        lg: 430,
                        xl: 475,
                    },
                }}>
                    <Box>
                        <Typography variant="body1">
                            Hello , I am 
                        </Typography>
                        <Typography variant="h1"> Amine triki</Typography>
                        <Typography variant="h2">
                            I am Junior front end developer
                        </Typography>
                        <Typography variant="h3">
                            based in tunisia; I create elegant and responsive sites, easy to
                            use and built with best practices.
                        </Typography>
                        <Typography variant="h3">
                            I use HTML ,CSS, JavaScript ( React ); I am a WordPress designer
                        </Typography>
                        <Typography
                            variant="h3"
                            component="a"
                            href="https://mega.nz/file/WIciFbZK#giPo5Q3uIrClf12Truz60TxZoW6vnC6sTZyXNA9QbKk"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                my: 2,

                                textDecoration: "none",
                                background: "#cddc39",
                                borderColor: 'secondary.main',
                                borderRadius: 10,
                                p: 2,
                                color: "primary.main",
                                display: "inline-block",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            Download Resume
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", gap: 2}}>
                        {socialLinks.map((item, index) => (
                            <MotionAnchor
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{display: "inline-block"}}
                                animate={{scale: [1, 1.2, 1]}}
                                transition={{duration: 1, repeat: Infinity}}
                            >
                                {React.cloneElement(item.icon, {sx: iconStyle})}
                            </MotionAnchor>
                        ))}
                    </Box>
                </Box>
                <Box
                    component="img"
                    src={AmineTrikiImg}
                    alt="Amine Triki image"
                    sx={{
                        width: {
                            xs: 300,
                            sm: "350px",
                            md: "400px",
                            lg: "430px",
                            xl: "475px",
                        },
                        height: "auto",
                    }}
                />
            </Box>
        </main>
    );
}

export default Home;
