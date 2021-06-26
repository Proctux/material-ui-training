import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'

import useStyles from './styles.js'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
  const styles = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={styles.icon}/>
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={styles.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone, this is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen
            </Typography>
            <div className={styles.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    See my photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={styles.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={styles.card}>
                <CardMedia
                  className={styles.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h5">Heading</Typography>
                  <Typography>
                    This is a media card. You can put any description media that you want inside of it.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={styles.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle2" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  )
}

export default App
