import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    IconButton,
    Typography
} from '@material-ui/core/'
import { 
  Icon
} from './'

const useStyles = makeStyles((theme) => ({
  contentCard: {
    margin: 'auto',
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
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
        action={
          <IconButton>
            <Icon icon={`menu`} color={`inherit`} />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image={content.media}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content.excerpt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Icon icon={`menu`} color={`inherit`} />
        </IconButton>
        <IconButton aria-label="share">
          <Icon icon={`menu`} color={`inherit`} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Icon icon={`menu`} color={`inherit`} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant={`body1`} gutterBottom>
            {content.body}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
