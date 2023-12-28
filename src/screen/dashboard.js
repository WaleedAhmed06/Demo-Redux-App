import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import logo from "../image/logo.png";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AddIcon from "@mui/icons-material/Add";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { addUser, delUser } from "../config/reduces/userslice";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Dashboard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const datausers = useSelector((state) => state.user);
  const [usersData, setUsersData] = useState([]);
  const [calldata, setCallData] = useState(null);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "#015249",
        minHeight: "100vh",
      }}
    >
      <Typography style={{ textAlign: "center" }}>
        <img style={{ margin: "12%", width: "65%" }} src={logo} />
      </Typography>
      <List
        style={{
          background: "#043933",
          borderRadius: "7px",
          width: "80%",
          color: "white",
          textAlign: "center",
          padding: "0%",
        }}
      >
        {["CUSTOMERS"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: "white" }}>
                <SupportAgentIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

const fetchData = async () => {
  try {
    const response = await axios.get(`https://reqres.in/api/users?page=1`);
    console.log(response.data, "response.data?.data");
    dispatch(addUser(response.data.data));
    setCallData([...response.data?.data]);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  if (!calldata) {
    fetchData();
    setUsersData([...datausers])
  }
}, [calldata]);

  const edituser = (id) => {
    navigate(`edit/${id}`);
  };
  const deleteuser = (id) => {
    navigate(`delete/${id}`);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ background: "white" }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            style={{ color: "black", fontWeight: "bolder", padding: "30px" }}
          >
            CUSTOMERS
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        style={{ backgroundColor: "#F3F3F3" }}
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          <Box
            style={{
              display: "flex",
              margin: "2rem",
              color: "white",
              background: "linear-gradient(to right, #57BC90, #004B40)",
              width: "13rem",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <Button
              onClick={() => navigate(`add`)}
              style={{ color: "white", padding: "8px" }}
            >
              <AddIcon />
              ADD NEW CUSTOMER
            </Button>
          </Box>

          <Box
            style={{
              display: "grid",
              margin: "1rem 2rem 1rem 2rem",
              backgroundColor: "rgba(57, 181, 74, .4)",
              padding: "5px 5px 5px 5px",
              borderRadius: "5px",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
              width: "93%",
            }}
          >
            <Typography></Typography>
            <Typography>Customer ID</Typography>
            <Typography>Customer Name</Typography>
            <Typography style={{ textAlign: "center" }}>Email</Typography>
            <Typography></Typography>
            <Typography></Typography>
          </Box>

          <TableContainer
            component={Box}
            style={{ margin: "1rem 2rem", width: "93%" }}
          >
            <Table>
              <TableHead></TableHead>
              <TableBody>
                {usersData.map((x, id) => (
                  <TableRow
                    style={{
                      border: "5px solid white",
                      borderRadius: "1px",
                      backgroundColor: "rgba(243, 243, 243, 1)",
                    }}
                    key={id}
                  >
                    <TableCell style={{ width: "16%" }}>
                      <img
                        style={{ borderRadius: "15px" }}
                        src={x.avatar}
                        width={"80rem"}
                        alt={`Avatar-${id}`}
                      />
                    </TableCell>
                    <TableCell style={{ width: "15%" }}>{x.id}</TableCell>
                    <TableCell style={{ width: "20%" }}>
                      {`${x.first_name}`}
                    </TableCell>
                    <TableCell style={{ width: "25%" }}>{x.email}</TableCell>
                    <TableCell style={{ width: "12%" }}>
                      <Button
                        onClick={() => edituser(x.id)}
                        style={{
                          backgroundColor: "rgba(57, 181, 74, .4)",
                          color: "rgba(57, 181, 74, 1)",
                        }}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell style={{ width: "12%" }}>
                      <Button
                        onClick={() => deleteuser(x.id)}
                        style={{
                          backgroundColor: "rgba(216, 0, 0, .4)",
                          color: "rgba(216, 0, 0, 1)",
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
