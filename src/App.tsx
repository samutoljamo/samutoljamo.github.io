import { Box, Container, Grid, Link, Typography } from '@mui/material'

import {ProjectCard, Social} from "./components"
import {socials, projects} from "./constants"


function App() {

  return (
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1">Samu Toljamo</Typography>
        <Box sx={{
          mt: 2
        }}>
          <Link href="/resume.pdf">Resume</Link>
          <Box sx={{
            display: 'flex',
            flex: 1,
            marginTop: 2
          }}>
            {socials.map(s => (
              <Social {...s} />
            ))}
          </Box>
        </Box>
        <Box sx={{
          mt: 2
        }}>
          <Typography variant="h5" component="h2">Coding projects</Typography>
          <Grid container spacing={2}>
            {projects.map(p => (
              <Grid item xs={12} sm={6} key={p.name}>
                <ProjectCard {...p} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
  )
}

export default App
