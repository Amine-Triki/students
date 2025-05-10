import { Box, Typography, Container } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} -- 2025 Amine Triki. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
