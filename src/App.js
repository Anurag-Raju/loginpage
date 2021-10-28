import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import "./App.css";

function App() {
  const [userRegistration, setUserRegistration] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = userRegistration;

    const response = await fetch(
      " http://35.183.77.82:8080/althealth/login?tenant=hemas",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="logindiv">
      <form method="POST">
        <Grid container>
          <Grid item>
            <TextField
              className="form"
              fullWidth
              label="Email"
              name="email"
              value={userRegistration.email}
              onChange={inputHandler}
            />
            <TextField
              className="form"
              fullWidth
              label="Password"
              name="password"
              value={userRegistration.password}
              onChange={inputHandler}
            />
            <Button
              className="button"
              onClick={submitHandler}
              variant="contained"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default App;
