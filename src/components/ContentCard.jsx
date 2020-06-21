import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Button,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    IconButton,
    Typography,
    Grid,
} from '@material-ui/core/'
import { 
  Icon
} from './'

const useStyles = makeStyles((theme) => ({
  contentCard: {
    margin: 'auto',
    maxWidth: 600,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
  },
  btnTxt:{
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.oneSec,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    // backgroundColor: theme.palette.secondary.main,
  },
}))

export default function ContentCard(props) {

  const classes = useStyles()
  const { content } = props.options


  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.contentCard}>
      <CardHeader
        title={content.title}
        subheader={content.subheader}
        avatar={<Avatar src={content.avatar} className={classes.avatar} />}
        action={<IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="Expand">
                  <Icon icon={`expand`} />
                </IconButton>}
      />      
      <CardContent>
    
        <Grid container>
          {content.media ? <Grid item xs={12} md={6} className={classes.gridItem}><CardMedia
            className={classes.media}
            image={content.media}
            title={content.title}
          /></Grid> : null }
          
          <Grid item xs={12} md={ content.media ? 6 : 12 } className={classes.gridItem}>
            <CardContent>
              <Typography variant={`body1`} gutterBottom>
                {content.excerpt}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      
        <Collapse 
          unmountOnExit
          in={expanded} 
          timeout={`auto`}>
          <CardContent>
            <Typography variant={`body1`} gutterBottom>
              {content.body}
            </Typography>
          </CardContent>
        </Collapse>

          <CardActions disableSpacing>
            <Button 
              fullWidth
              variant={`text`}
              color={`primary`}
              onClick={(e) => {
                e.preventDefault()
                console.log ('next')
              }}>
              <span className={classes.btnTxt}>
                Next
              </span> 
              <Icon icon={`next`} color={`inherit`} />
              
            </Button>

          </CardActions>

        </CardContent>

    </Card>
  )
}