import { createTheme, colors, ThemeProvider } from "@mui/material";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButton } from "./components/MuiButton";
import { MuiTextField } from "./components/MuiTextField";
import { MuiSelect } from "./components/MuiSelect";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiRating } from "./components/MuiRating";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiLayout } from "./components/MuiLayout";
import { MuiCard } from "./components/MuiCard";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiImageList } from "./components/MuiImageList";
import { MuiNavBar } from "./components/MuiNavBar";
import { MuiLink } from "./components/MuiLink";
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiSpeedDial } from "./components/MuiSpeedDial";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
import { MuiAvatar } from "./components/MuiAvatar";
import "./App.css";
import { MuiBadge } from "./components/MuiBadge";
import { MuiList } from "./components/MuiList";
import { MuiTable } from "./components/MuiTable";
import { MuiProgress } from "./components/MuiProgress";
import { MuiSkeleton } from "./components/MuiSkeleton";
import { MuiResponsiviness } from "./components/MuiResponsiviness";

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavBar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiTable /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        <MuiResponsiviness />
      </div>
    </ThemeProvider>
  );
}

export default App;
