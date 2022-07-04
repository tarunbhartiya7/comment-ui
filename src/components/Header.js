import "../styles.css";
import { Resizable } from "re-resizable";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Resizable
      className="component"
      defaultSize={{
        width: "66%",
        height: 250,
      }}
    >
      <Typography variant="h3" component="div">
        React Re-Sizeable Demo
      </Typography>
    </Resizable>
  );
}
