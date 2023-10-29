import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primary="List item 1"
            secondary="some text if you need to add this list"
          ></ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>

          <ListItemText
            primary="List item 2"
            secondary="some text if you need to add this list"
          ></ListItemText>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>

          <ListItemText
            primary="List item 3"
            secondary="some text if you need to add this list"
          ></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};
