import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoritIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ position: "absolute", bottom: 0, width: "100%" }}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction icon={<HomeIcon />} label="Home" />
      <BottomNavigationAction icon={<FavoritIcon />} label="Favorite" />
      <BottomNavigationAction icon={<PersonIcon />} label="Person" />
    </BottomNavigation>
  );
};
