import React from "react";
import {
  Typography,
  Stack,
  AppBar,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import SearchBarV2 from "./SearchBarV2";

const NavigationBar = () => {
  return (
    <AppBar
      elevation={0}
      variant="elevation"
      position="fixed"
      sx={{
        display: { xs: "none", sm: "block" },
        px: 2,
        bgcolor: '#3e5a5b',
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: '#FFF' }} variant="h6" fontWeight="bold">
          Zcash Explorer
        </Typography>

       <SearchBarV2 />

        <Stack spacing={1} direction="row" alignItems="center">
          <Link href="/" style={{ color: "black", fontWeight: "500" }}>
            <Typography
              variant="subtitle2"
              sx={{
                textDecoration: "none", // Removes the underline from the link
                color: "#000000", // Uses the primary color from the theme
                fontWeight: "medium", // Medium weight for the text
                borderRadius: "4px", // Slightly rounded corners for a soft look
                padding: "6px 12px", // Some padding around the text
                "&:hover": {
                  color: "#DAA520", // Darkens the text color slightly on hover
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(0, 123, 255, 0.5)", // Adds a soft glow when the link is focused
                },
                "&:active": {
                  color: "primary.light", // Lightens the text color when clicked
                },
              }}
            >
              Home
            </Typography>
          </Link>

          <Link href="/blocks" style={{ color: "black", fontWeight: "500" }}>
            <Typography
              variant="subtitle2"
              sx={{
                textDecoration: "none", // Removes the underline from the link
                color: "#000", // Uses the primary color from the theme
                fontWeight: "medium", // Medium weight for the text
                borderRadius: "4px", // Slightly rounded corners for a soft look
                padding: "6px 12px", // Some padding around the text
                "&:hover": {
                  color: "#DAA520", // Darkens the text color slightly on hover
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(0, 123, 255, 0.5)", // Adds a soft glow when the link is focused
                },
                "&:active": {
                  color: "primary.light", // Lightens the text color when clicked
                },
              }}
            >
              Blocks
            </Typography>
          </Link>
          <Link href="/transactions" style={{ fontWeight: "500" }}>
            <Typography
              variant="subtitle2"
              sx={{
                textDecoration: "none", // Removes the underline from the link
                color: "#000", // Uses the primary color from the theme
                fontWeight: "medium", // Medium weight for the text
                borderRadius: "4px", // Slightly rounded corners for a soft look
                padding: "6px 12px", // Some padding around the text
                "&:hover": {
                  color: "#DAA520", // Darkens the text color slightly on hover
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(0, 123, 255, 0.5)", // Adds a soft glow when the link is focused
                },
                "&:active": {
                  color: "primary.light", // Lightens the text color when clicked
                },
              }}
            >
              Transactions
            </Typography>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
