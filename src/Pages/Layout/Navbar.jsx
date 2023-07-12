
import { Box, Typography, IconButton, InputBase } from "@mui/material";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import UserImage from "../../Images/user.png"

// const Header = ({title}) => {
//     return (
//     <Typography>{title}</Typography>
//     )
// }

const Navbar = () => {

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ml:2}} variant="h5">
                Settings
            </Typography>
            <Box display="flex" justifyContent="center" p={2} gap="15px">
                <Box height="52px" width="191px" display="flex" backgroundColor="#fdfdfd" border="1px solid #ECF1F6" borderRadius="10px">
                    <IconButton type="button" sx={{p:1.5}}>
                        <SearchRoundedIcon />
                    </IconButton>
                    <InputBase sx={{ml:1.5, flex:1}} placeholder="Search..." />
                </Box>
                <Box backgroundColor="#ECF1F6" borderRadius="50%" ><IconButton type="button" sx={{p:2}}><NotificationsNoneRoundedIcon /></IconButton></Box>
                <Box>
                    <Box height="52px" width="88px" borderRadius="26px" backgroundColor="#ECF1F6" display="flex" gap="5px" paddingLeft={1} boxSizing="border-box" justifyContent="center" alignItems="center" >
                        <img  src={UserImage} alt="not found" />
                        <IconButton><KeyboardArrowDownRoundedIcon /></IconButton>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default Navbar;