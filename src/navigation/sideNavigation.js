import React from "react";
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

export default function SideBar() {
    return (
        <section>
            <div className="sideNavigation">
                <div className="logo logoSign homeLogo"></div>

                <div className="items">
                <NavItem icon={HomeOutlinedIcon} label="Home" />
                <NavItem icon={SearchIcon} label="Search" />
                <NavItem icon={ExploreOutlinedIcon} label="Explore" />
                <NavItem icon={() => <span>Reels Icon</span>} label="Reels" />
                <NavItem icon={SendOutlinedIcon} label="Messages" />
                <NavItem icon={FavoriteBorderIcon} label="Notifications" />
                <NavItem icon={AddBoxOutlinedIcon} label="Create" />

                <div className="user">
                    <div className="profilePicture"> 
                        <span>pic</span>
                    </div>
                    <div className="profile">
                        <span>Profile</span>
                    </div>
                </div>
                </div>
                <div className="more">
                    <div className="dropdown">
                        <span>Three lines</span>
                    </div>
                    <div className="options">
                        <span >More</span>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
