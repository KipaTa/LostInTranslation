import { AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useUser } from "../../context/UserContext";

const Navbar = () => {
  const { user } = useUser();

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#FFC75F" }}>
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <div>
            <img src={"/Logo.png"} alt="Logo" className="logo" />
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              id="Title"
              noWrap
              component="a"
              href="/translation"
              sx={{
                display: { xs: "none", md: "flex" },
                letterSpacing: "2px",
                fontSize: "30px",
                color: "inherit",
                textDecoration: "none",
                fontFamily: "LoveFont",
              }}
            >
              Lost in translation
            </Typography>
          </Box>
          {user !== null && (
            <div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Button
                    href="/translation"
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      fontFamily: "LoveFont",
                      fontsize: "50px",
                    }}
                  >
                    Translate
                  </Button>
                </Box>
                <Box>
                  <IconButton size="large" color="inherit" href="/profile">
                    <AccountCircle />
                  </IconButton>
                </Box>
              </Box>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
