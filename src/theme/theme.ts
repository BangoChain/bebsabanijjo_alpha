import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#6366f1" }, // Indigo
    secondary: { main: "#ec4899" }, // Pink
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
