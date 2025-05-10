import {Box, Container} from "@mui/material";
import Heading from "../../components/Heading";

import Icons from "../../components/Icons";

import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaPhp,
    FaLaravel,
    FaWordpress,
    FaFigma,
} from "react-icons/fa";

import {IoLogoJavascript} from "react-icons/io5";
import {RiTailwindCssFill, RiNextjsFill} from "react-icons/ri";
import {
    SiMui,
    SiPostman,
    SiMariadb,
    SiFlutter,
    SiMysql,
    SiTypescript,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobepremierepro,
    SiDavinciresolve,
} from "react-icons/si";

const group1 = [
    {icon: <FaHtml5/>, name: "HTML"},
    {icon: <FaCss3Alt/>, name: "CSS"},
    {icon: <FaBootstrap/>, name: "Bootstrap"},
    {icon: <RiTailwindCssFill/>, name: "Tailwind CSS"},
    {icon: <IoLogoJavascript/>, name: "JavaScript"},
    {icon: <FaReact/>, name: "React"},
    {icon: <SiMui/>, name: "MUI"},
    {icon: <FaWordpress/>, name: "WordPress"},
];

const group2 = [
    {icon: <FaPhp/>, name: "PHP"},
    {icon: <FaLaravel/>, name: "Laravel"},
    {icon: <SiPostman/>, name: "Postman"},
    {icon: <SiMysql/>, name: "MySQL"},
    {icon: <SiMariadb/>, name: "MariaDB"},
    {icon: <SiFlutter/>, name: "Flutter"},
    {icon: <SiTypescript/>, name: "TypeScript"},
    {icon: <RiNextjsFill/>, name: "Next.js"},
];

const group3 = [
    {icon: <SiAdobephotoshop/>, name: "Photoshop"},
    {icon: <SiAdobeillustrator/>, name: "Illustrator"},
    {icon: <SiAdobepremierepro/>, name: "Premiere Pro"},
    {icon: <SiDavinciresolve/>, name: "DaVinci Resolve"},
    {icon: <FaFigma/>, name: "Figma"},
];

const Skills = () => {
    return (
        <main>
            <Box py={5}>
                <Container maxWidth="xl">
                    <Heading title="My Skills" subTitle="What I know"/>
                    <Box
                        mb={5}
                        sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Icons links={group1} animation={{scale: [1, 1.3, 1]}}/>
                        <Heading title="In Progress" subTitle="Basic understanding of"/>
                        <Icons links={group2} animation={{rotate: [0, 10, -10, 0]}}/>
                        <Heading title="Other Skills" subTitle="Creative tools I use"/>
                        <Icons links={group3} animation={{opacity: [1, 0.5, 1]}}/>
                    </Box>
                </Container>
            </Box>
        </main>
    );
};

export default Skills;
