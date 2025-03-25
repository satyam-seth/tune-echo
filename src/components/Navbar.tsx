import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  InputBase,
} from "@mui/material";
import {
  Menu,
  Search,
  Close,
  Brightness4,
  Brightness7,
  AccountCircle,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  // TODO: Add support for theme provider
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleDrawer = (open: boolean) => () => setMobileOpen(open);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  const menuItems = [
    { text: "Home", path: "/" },
    // TODO: Enable these links once list components and routes ready
    // { text: "Songs", path: "/song" },
    // { text: "Album", path: "/library" },
    // { text: "Artist", path: "/Artist" },
    // { text: "Playlist", path: "/playlist" },
  ];

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
            color="inherit"
          >
            <Menu />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              display: searchOpen ? "none" : "block",
            }}
          >
            🎵 Tune Echo
          </Typography>

          {/* Search Bar (Mobile Hidden) */}
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              bgcolor: "white",
              borderRadius: 1,
              px: 1,
            }}
          >
            <InputBase
              placeholder="Search songs, artists..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ ml: 1, flex: 1 }}
            />
            <IconButton type="submit">
              <Search />
            </IconButton>
          </Box>

          {/* Navigation (Hidden on Mobile) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              // TODO: Highlight current link
              <Typography
                key={item.text}
                component={Link}
                to={item.path}
                sx={{ color: "inherit", textDecoration: "none" }}
              >
                {item.text}
              </Typography>
            ))}

            {/* Theme Toggle */}
            {/* TODO: Add support for theme provider */}
            <IconButton
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
              color="inherit"
            >
              {theme === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* Profile Icon */}
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>

          {/* Mobile Search Icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleSearch}
            color="inherit"
          >
            <Search />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Search Bar (Full-Screen Overlay) */}
      {searchOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "background.default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1300,
          }}
        >
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "80%",
              maxWidth: 400,
              bgcolor: "white",
              borderRadius: 1,
              px: 2,
              boxShadow: 3,
            }}
          >
            <InputBase
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ flex: 1 }}
              autoFocus
            />
            <IconButton type="submit">
              <Search />
            </IconButton>
            <IconButton onClick={toggleSearch}>
              <Close />
            </IconButton>
          </Box>
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                {/* TODO: Highlight current link */}
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
