import "../styles.css";
import { Resizable } from "re-resizable";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Sidebar() {
  return (
    <Resizable
      className="component"
      defaultSize={{
        width: "30%",
        height: 250,
      }}
    >
      <Stack spacing={2} direction="row">
        <Button variant="contained">Add</Button>
        <Button variant="outlined">Update</Button>
      </Stack>
    </Resizable>
  );
}
