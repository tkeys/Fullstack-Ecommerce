import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BalconyIcon from "@mui/icons-material/Balcony";

import { Link, NavLink } from "react-router-dom";
import {
  Avatar,
  Button,
  FormControlLabel,
  List,
  ListItem,
  Menu,
  MenuItem,
  Switch,
  Tooltip,
  styled,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { logout } from "../../src/redux/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "Admin", path: "/admin" },
];

const rightLinks = [
  {
    title: "Login",
    path: "/login",
  },
  { title: "Register", path: "/register" },
  { title: "Logout", path: "/" },
];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

function Header({ darkMode, handleThemeChange }: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);
  const { name } = user;
  const cartItems = useSelector((state: any) => state.cart);
  const cartQuantity = cartItems.items.reduce(
    (qty: number, item: any) => qty + item.quantity,
    0
  );

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          component={NavLink}
          to="/"
          variant="h6"
          color="inherit"
          noWrap
        >
          <BalconyIcon sx={{ fontSize: 100 }} />
          <p> {name}</p>
        </Typography>
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              defaultChecked
              onChange={handleThemeChange}
            />
          }
          label=""
        />
        {/*  <FormControlLabel control={<Switch defaultChecked />} label="Label" /> */}
        {/* <Switch checked={darkMode} onChange={handleThemeChange} /> */}
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{
                color: "inherit",
                typography: "h6",
                "&:hover": {
                  color: "blue",
                },
              }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge
              color="secondary"
              badgeContent={cartQuantity}
              component={NavLink}
              to="/cart"
            >
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{
                  color: "inherit",
                  typography: "h6",
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List> */}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {rightLinks.map(({ title, path }) => (
              <MenuItem key={path} onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  component={NavLink}
                  to={path}
                  key={path}
                  onClick={() => dispatch(logout())}
                >
                  {title.toUpperCase()}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
