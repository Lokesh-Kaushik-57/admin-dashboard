import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {ReactComponent as Person} from "../../Images/Profile.svg"
import {ReactComponent as OutlinedPassword} from "../../Images/OutlinedPassword.svg"
import {ReactComponent as OutlinedWallet} from "../../Images/OutlinedWallet.svg"
import {ReactComponent as Calendar} from "../../Images/Calendar.svg"
import {ReactComponent as Shield} from "../../Images/Shield.svg"
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

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


const Settings = () => {

    const [selected, setSelected] = useState("Settings")

    return (
        <ProSidebar>
            <Menu>
                    <Box paddingLeft="10%" paddingTop="30px">
                    <Typography>
                        Personal Info
                    </Typography>
                    <Item
                    title="Edit Profile"
                    to="/settings/editProfile"
                    icon={<Person />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Password"
                    to="/settings/password"
                    icon={<OutlinedPassword />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Direct Debits"
                    to="/"
                    icon={<OutlinedWallet />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Schedule Transfer"
                    to="/"
                    icon={<Calendar />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Data Privacy"
                    to="/"
                    icon={<Shield />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    </Box>
            </Menu>   
        </ProSidebar>
    )
};

export default Settings;