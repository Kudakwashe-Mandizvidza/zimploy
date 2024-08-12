import { Comment, Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Post = ({ props, shareText, shareUrl }) => {
  const [like, setLike] = useState(56);
  const [isliked, setIsLiked] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  let [commentCount, setCommentCount] = useState(5);

  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
      handleCommentCount();
    }
  };

  const handleLike = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleCommentCount = () => {
    if (setCommentText) {
      commentCount += 1;
    }
    setCommentCount(commentCount);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: shareText,
          url: shareUrl,
        });
      } else {
        throw new Error("Web share API not supported.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <>
      <li>
        <Container sx={{ marginBottom: "2px" }}>
          <Card
            sx={{
              maxWidth: 600,
              maxHeight: "auto",
              margin: "auto",
              marginBottom: "10px",
            }}
          >
            <CardHeader
              avatar={
                <IconButton component={Link} to="/:userId/profile">
                  <Avatar
                    aria-label="post"
                    sx={{ backgroundColor: "blue", cursor: "pointer" }}
                  >
                    H
                  </Avatar>
                </IconButton>
              }
              action={
                <IconButton aria-label="settings" onClick={handleMenuOpen}>
                  <MoreVert color="primary" />
                </IconButton>
              }
              title="Hydrogen Bond"
              subheader="4 May 2024"
            />
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/wishlist"
              >
                Wishlist
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>Report</MenuItem>
            </Menu>
            <Divider />

            <CardMedia
              component="img"
              sx={{ objectFit: "cover" }}
              height="240"
              src="/assets/logan.jpg"
              alt="post media"
            />

            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Hie, my name is Hydrogen Bond, the Founder and CEO of Zimploy. I
                hope you have a great experience on this platform and that you
                achieve your goals, and ambitions.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="like">
                <Favorite
                  onClick={handleLike}
                  sx={{ color: isliked ? "red" : null }}
                />
                <Typography sx={{ fontWeight: "bold" }}>{like}</Typography>
              </IconButton>
              <IconButton aria-label="comment" onClick={handleToggleDrawer}>
                <Comment color="primary" />
                <Typography sx={{ fontWeight: "bold" }}>
                  {commentCount}
                </Typography>
              </IconButton>
              <IconButton
                aria-label="share"
                sharetext="Check out this post"
                shareurl={window.location.href}
                onClick={handleShare}
              >
                <Share color="primary" />
              </IconButton>
            </CardActions>
          </Card>
        </Container>

        <div>
          <Drawer
            anchor="bottom"
            open={drawerOpen}
            onClose={handleToggleDrawer}
            sx={{ maxWidth: "600px" }}
          >
            <div style={{ padding: "16px" }}>
              <List>
                {comments.map((comment, index) => (
                  <div key={index}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar />
                      </ListItemAvatar>
                      <ListItemText primary={comment} />
                    </ListItem>
                    {index !== comments.length - 1 && <Divider />}
                  </div>
                ))}
              </List>
              <Divider />
              <div style={{ marginTop: "16px" }}>
                <TextField
                  label="Add a comment"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCommentSubmit}
                  style={{ marginTop: "8px" }}
                >
                  Comment
                </Button>
              </div>
            </div>
          </Drawer>
        </div>
      </li>
    </>
  );
};
