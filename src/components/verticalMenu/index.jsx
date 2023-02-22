import React from "react";
import MenuItem from "../menuItem";
import { IoHomeOutline,IoSearchOutline,IoSettingsOutline,IoPersonOutline } from "react-icons/io5";
import "./index.css";

const VerticalMenu=()=>{
    return(
        <div className="menu">
            <h1 className="title">GoodFood</h1>
            <div className="menu-items">
                <MenuItem name="Home" logo={<IoHomeOutline/>}/>
                <MenuItem name="Search" logo={<IoSearchOutline/>}/>
                <MenuItem name="Setting" logo={<IoSettingsOutline/>}/>
                <MenuItem name="Profile" logo={<IoPersonOutline/>}/>
            </div>
        </div>
    );
}

export default VerticalMenu;