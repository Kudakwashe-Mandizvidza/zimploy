import React, { useState } from "react";

import {
  ExpandMoreOutlined,
  MoreVert,
  OpenInNew,
  Recommend,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

import "@fontsource/roboto/500.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",

  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const JobItem = () => {
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState(77);
  const [isliked, setIsLiked] = useState(false);

  const [isConnected, setIsConnected] = useState(false);

  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleConnection = () => {
    setIsConnected(!isConnected);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };

  return (
    <Container sx={{ marginBottom: "5px", marginTop: "19px" }}>
      <Card
        sx={{
          maxWidth: 600,
          maxHeight: 900,
          marginBottom: "10px",
          margin: "auto",
        }}
      >
        <CardHeader
          avatar={
            <IconButton
              aria-label="profile-avatar"
              component={Link}
              to="/:userId/profile"
            >
              <Avatar
                sx={{ backgroundColor: "blue", cursor: "pointer" }}
                arial-label="job-post"
              >
                N
              </Avatar>
            </IconButton>
          }
          action={[
            <IconButton aria-label="settings"  >
              <Button onClick={handleConnection}>
                {isConnected ? "Linked" : "Link"}
              </Button>
            </IconButton>,
            <IconButton aria-label="settings">
              <MoreVert onClick={handleMenuOpen} />
            </IconButton>,
          ]}
          title="NUKLEUS" 
          subheader="Aug 09, 2024"
        />
        
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/wishlist">
            Wishlist
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>Share</MenuItem>
          <MenuItem onClick={handleMenuClose}>Report</MenuItem>
        </Menu>

        <CardMedia
          component="img"
          height='250'
          sx={{objectFit:'cover',}}
          image="/assets/jobadvert.jpg"
          alt="jobadvert"
        />

        <CardContent>
          <Typography variant="h5" sx={{ position:'inherit', textAlign:'center' }}>
            Human Resources Manager
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Job state:{" "}
            <Chip
              icon={<OpenInNew />}
              label="Open"
              color="primary"
              variant="outlined"
            />
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Job Location: <b>Harare, Zimbabwe</b>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Work Environment: <b>On-site</b>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Salary Range: <b>$300-$500/month</b>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="recommend">
            <Recommend
              onClick={handleLike}
              sx={{ color: isliked ? "blue" : null }}
            />
            <Typography sx={{ fontWeight: "bold" }}>
              {" "}
              {like} Recommend
            </Typography>
          </IconButton>
          <IconButton aria-label="apply">
            <Button sx={{ borderColor: "divider" }} component={Link} to='/jobId' >Apply now</Button>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Description"
          >
            <ExpandMoreOutlined/>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {expanded && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="button"
                  paragraph
                >
                  Job Description
                </Typography>
                <Divider />
                <Typography paragraph>
                  If i have seen any further, it is by standing on the shoulders
                  of GIANTS.
                </Typography>
                <Typography paragraph>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                  hic incidunt, sunt molestiae rem dolorum dolor distinctio,
                  porro excepturi quae sint ipsam? Iusto, laboriosam. Quisquam
                  corporis distinctio saepe voluptatum perferendis.
                </Typography>
                <Typography paragraph>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  eum sit, dolor, excepturi magni provident necessitatibus quis
                  sed aperiam aliquam adipisci libero a? Laudantium sint eveniet
                  dicta fugiat animi quae?
                </Typography>
                <Typography paragraph>
                  I can do all things through Christ, who strengthens me.
                </Typography>
              </div>
            )}
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
};
