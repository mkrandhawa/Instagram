import React, {useContext} from "react";
// import { Link } from "react-router-dom";
// import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import SearchIcon from '@mui/icons-material/Search';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

// import ExploreIcon from '@mui/icons-material/Explore';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

// import TelegramIcon from '@mui/icons-material/Telegram';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import NavItem from "./navItem";
import { UserContext } from '../context/userContext';

export default function SideBar() {
    
    const {user} = useContext(UserContext);
    console.log('this is user', user);
    console.log(user.picture)

    return (
        <>
            <div className="sideNavigation">
                <div className="logo logoSign homeLogo"></div>

                <div className="items">
                    <NavItem icon={HomeOutlinedIcon} label="Home" />
                    <NavItem icon={SearchIcon} label="Search" />
                    <NavItem icon={ExploreOutlinedIcon} label="Explore" />

                    <div className="reels">
                        <div className="reel"></div>
                        <div>
                            <span>Reels</span>
                        </div>
                    </div>

                    <NavItem icon={SendOutlinedIcon} label="Messages" />
                    <NavItem icon={FavoriteBorderIcon} label="Notifications" />
                    <NavItem icon={AddBoxOutlinedIcon} label="Create" />

                    <div className="user">
                        <div className="profilePicture"> 
                            <img src={`http://localhost:4000/${user.picture}`} alt="Profile" />
                        </div>
                        <div className="profile">
                            <span>Profile</span>
                        </div>
                    </div>

                </div>

                <div className="more">
                    <div className="hamburgerMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="moreText">
                        <span>More</span>
                    </div>
                </div>
                
            </div>
        </>
    )
}
