import "../styles.css";
import { Resizable } from "re-resizable";
import TextField from "@mui/material/TextField";

export default function Main() {
  return (
    <Resizable
      className="component"
      defaultSize={{
        width: "98%",
        height: 350,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Message"
        variant="outlined"
        fullWidth
        className="textField"
      />
    </Resizable>
  );
}
