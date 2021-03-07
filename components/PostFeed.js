import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PostFeed = ({ posts, admin }) => {
  return posts
    ? posts.map((e) => {
        <PostItem post={e} key={post.slug} admin={admin} />;
      })
    : "";
};

export default PostFeed;

const PostItem = ({ post, admin = false }) => {
  const classes = useStyles();
  const wordCount = post.content.trim().split(/\s+/g).length;
  const minsToRead = wordCount / 100 + 1;

  return (
    <div>
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        <Link href={`/${post.username}`}>
          <ListItem button Divider>
            <Typography variant="subtitle2" gutterBottom>
              <ListItemText primary={`by @{post.username`} />
            </Typography>
          </ListItem>
        </Link>
        <Link href={`/${post.username}/${post.slug}`}>
          <ListItem button Divider>
            <Typography variant="h6" gutterBottom>
              <ListItemText primary={post.title} />
            </Typography>
          </ListItem>
        </Link>
      </List>
      <Card>
        <CardActions>
          <ListItem button Divider>
            <Typography variant="caption" gutterBottom>
              <ListItemText
                primary={`${wordCount} words. ${minsToRead} min read`}
              />
            </Typography>
          </ListItem>
        </CardActions>
        <CardActions>
          <ListItem button Divider>
            <Typography variant="caption" gutterBottom>
              <ListItemText
                primary={`${FavoriteSharpIcon} ${post.heartCount} Hearts`}
              />
            </Typography>
          </ListItem>
        </CardActions>
      </Card>
    </div>
  );
};
