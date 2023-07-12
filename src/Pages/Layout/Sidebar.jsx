import { useState } from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ToggleOffRoundedIcon from '@mui/icons-material/ToggleOffRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import Logo from "../../Images/Logo.png"


const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: "grey",
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };


const Sidebar = () => {

    const [selected, setSelected] = useState("Settings");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner" : {
                    background: `#2A2E41 !important`
                },
                "& .pro-icon-wrapper" : {
                    backgroundColor: "transparent !important",
                    marginRight: "0px !important"
                },
                "& .pro-icon" : {
                    justifyContent: "flex-start !important"
                },
                "& .pro-inner-item" : {
                    padding: "5px 35px 5px 0px !important"
                },
                "& .pro-menu-item.active" : {
                    color: "blueviolet !important"
                },

            }}
            >

            <ProSidebar>
                <Menu>
                    <Box paddingLeft="10%" paddingTop="30px">
                    <img src={Logo} alt="not found" style={{marginBottom: "40px"}}/>
                    <Typography>
                        MANAGE
                    </Typography>
                    <Item
                    title="Dashboard"
                    to="/"
                    icon={<GridViewRoundedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Transaction"
                    to="/"
                    icon={<AccountBalanceWalletRoundedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="My Wallet"
                    to="/"
                    icon={<SwapHorizRoundedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Analytics"
                    to="/"
                    icon={<PieChartRoundedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Settings"
                    to="/"
                    icon={<SettingsRoundedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Typography sx={{marginTop:"30px"}}>
                        OTHER
                    </Typography>
                    <Item
                    title="Theme"
                    to="/"
                    icon={<ToggleOffRoundedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Security"
                    to="/"
                    icon={<VpnKeyRoundedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    </Box>
              </Menu>
            </ProSidebar>
        </Box>
    )
};

export default Sidebar;