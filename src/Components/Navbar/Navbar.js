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
    <AppBar position="absolute">
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              id="Title"
              variant="h3"
              noWrap
              component="a"
              href="/translation"
              sx={{
                display: { xs: "none", md: "flex" },
                letterSpacing: "2px",
                fontSize: 22,
                fontFamily: "Courier new",
                color: "inherit",
                textDecoration: "none",
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
                    variant="h7"
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
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
