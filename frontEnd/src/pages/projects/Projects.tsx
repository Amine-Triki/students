import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import projects from "./AllProjects";
import Heading from "../../components/Heading";

const categories = ["all", "JavaScript", "Wordpress", "React"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue);
  };

  return (
    <main>
      <Box py={5}>
        <Container maxWidth="xl">
          <Heading title="My Projects" subTitle="What I build" />
          <Box mb={5}>
            <Tabs
              value={activeCategory}
              onChange={handleCategoryChange}
              centered
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {categories.map((category) => (
                <Tab
                  key={category}
                  value={category}
                  label={
                    <Typography
                      fontWeight={activeCategory === category ? 700 : 400}
                    >
                      {category === "all" ? "All works" : category}
                    </Typography>
                  }
                />
              ))}
            </Tabs>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {projects
              .filter(
                (project) =>
                  activeCategory === "all" ||
                  project.category === activeCategory
              )
              .map((project, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      height="150   "
                      image={project.imageSrc}
                      alt={project.title}
                    />
                    <CardContent sx={{ maxWidth: "260px" }}>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-around" }}>
                      {project.category !== "Wordpress" && (
                        <Button
                          variant="contained"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          sx={{ backgroundColor: "#ffc0cb", color: "black" }}
                        >
                          Github
                        </Button>
                      )}
                      {project.link !== "" && (
                      <Button
                        variant="contained"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{ backgroundColor: "#BFECFF", color: "black" }}
                      >
                        Preview
                      </Button>
                      )}</CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
};

export default Projects;
