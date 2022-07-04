import { Resizable } from "re-resizable";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Main() {
  const [message, setMessage] = useState("");
  const [messageId, setMessageId] = useState(null);
  const [userMessage, setUserMessage] = useState("");
  const [count, setCount] = useState(null);

  const handleAdd = async () => {
    const response = await axios.post(
      "https://dazzling-biscayne-36466.herokuapp.com/api/comments",
      {
        content: message,
      }
    );
    setMessageId(response.data.comment._id);
    setUserMessage(message);
    setCount(response.data.count);
    setMessage("");
  };

  const handleUpdate = async () => {
    const response = await axios.put(
      `https://dazzling-biscayne-36466.herokuapp.com/api/comments/${messageId}`,
      {
        content: message,
      }
    );
    setUserMessage(message);
    setCount(response.data.count);
    setMessage("");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Resizable
      className="component"
      defaultSize={{
        width: "98%",
        height: 350,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            fullWidth
            className="spacing"
            value={message}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={2} direction="row" className="spacing">
            <Button variant="contained" onClick={handleAdd}>
              Add
            </Button>
            <Button
              variant="outlined"
              onClick={handleUpdate}
              disabled={!messageId}
            >
              Update
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="div">
            {userMessage}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="div">
            {messageId}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {count && (
            <Typography variant="h6" component="div">
              User has clicked {count} times
            </Typography>
          )}
        </Grid>
      </Grid>
    </Resizable>
  );
}
