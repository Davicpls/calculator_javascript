import { Box, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

function App() {
  const [displayInput, setDisplayInput] = useState("0");

  const handleAddNumber = (number) => {
    if (displayInput.length === 8) {
      return;
    }
    if (displayInput === "0") {
      setDisplayInput(number);
    } else {
      setDisplayInput(displayInput + number);
    }
  };

  const handleAddDigit = (digit) => {};

  return (
    <Box
      sx={{
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "25px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "0.3em",
            fontSize: "44px",
          }}
        >
          Calculator
        </Typography>
      </Box>
      <Box
        sx={{
          height: "500px",
          width: "500px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "375px",
            width: "275px",
            backgroundColor: "grey",
            borderRadius: "7px",
            py: "12px",
            px: "14px",
          }}
        >
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E0E3E7",
                },
                "&:hover fieldset": {
                  borderColor: "#E0E3E7",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E0E3E7 !important",
                },
              },
            }}
            InputProps={{
              style: {
                textAlign: "right",
                fontFamily: "JetBrains Mono, monospace",
              },
            }}
            disabled
            fullWidth
            id="custom-css-outlined-input"
            value={displayInput}
          />
          <Grid sx={{ pt: "20px" }} container spacing={1}>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
              >
                AC
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
              >
                C
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
              >
                +
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
              >
                -
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
              >
                /
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
              >
                =
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => {
                  handleAddNumber("1");
                }}
              >
                1
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => {
                  handleAddNumber("2");
                }}
              >
                2
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => {
                  handleAddNumber("3");
                }}
              >
                3
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => {
                  handleAddNumber("4");
                }}
              >
                4
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => {
                  handleAddNumber("5");
                }}
              >
                5
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => {
                  handleAddNumber("6");
                }}
              >
                6
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => {
                  handleAddNumber("7");
                }}
              >
                7
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => {
                  handleAddNumber("8");
                }}
              >
                8
              </Button>
            </Grid>
            <Grid xs={8} md={4}>
              <Button
                sx={{
                  height: "45px",
                  width: "100%",
                  backgroundColor: "orange",
                }}
                onClick={() => {
                  handleAddNumber("9");
                }}
              >
                9
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
