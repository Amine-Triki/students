import { Box, Container, Typography, Grid, TextField, Button } from "@mui/material";
import { FaUserLarge } from "react-icons/fa6";
import { RiMailLine, RiMapPinLine } from "react-icons/ri";

import Heading from "../../components/Heading";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <Box component="section" id="Contact" textAlign="center" py={5}>
        <Container>

        <Heading title="Contact Me" subTitle="Get in touch" />
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            gap={4}
          >
            {/* Contact Info */}
            <Box flex={1} textAlign="start">
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Get in touch
              </Typography>
              <Typography mt={2}>
                If you have any questions or proposals, you can simply write to us.
                <br /> We will answer you as soon as possible.
              </Typography>

              <Box display="flex" alignItems="center" mt={4} gap={1}>
                <FaUserLarge size={20} />
                <Box>
                  <Typography fontWeight="bold">Name:</Typography>
                  <Typography>Amine Triki</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mt={3} gap={1}>
                <RiMapPinLine size={20} />
                <Box>
                  <Typography fontWeight="bold">Address:</Typography>
                  <Typography>Sakiet Ezzit, Sfax, Tunisia</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mt={3} gap={1}>
                <RiMailLine size={20} />
                <Box>
                  <Typography fontWeight="bold">Email:</Typography>
                  <Typography>Contact@aminetriki.com.tn</Typography>
                </Box>
              </Box>
            </Box>

            {/* Contact Form */}
            <Box component="form" onSubmit={handleSubmit} flex={1} textAlign="start">
              <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                />
              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Box>

              <Box display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#AA7A82",
                    textTransform: "none",
                    borderRadius: "6px",
                    "&:hover": {
                      backgroundColor: "#99666e",
                      cursor:"default"
                    },
                  }} onClick={handleSubmit}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
};

export default Contact;