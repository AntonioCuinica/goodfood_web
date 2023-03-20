import React from "react";
import MenuItem from "../menuItem";
import { IoHomeOutline,IoSearchOutline,IoSettingsOutline,IoPersonOutline } from "react-icons/io5";
import "./index.css";

const VerticalMenu=(props)=>{
    return(
        <div className="vertical-menu">
            <h1 className="vertical-menu-title">GoodFood</h1>
            <div className="vertical-menu-items">
                <MenuItem name="Home" logo={<IoHomeOutline/>} setTab={props.setTab} tabSelected={props.tabSelected}/>
                <MenuItem name="Search" logo={<IoSearchOutline/>} setTab={props.setTab} tabSelected={props.tabSelected}/>
                <MenuItem name="Setting" logo={<IoSettingsOutline/> } setTab={props.setTab} tabSelected={props.tabSelected}/>
                {
                    Boolean(props.user) ?
                        <MenuItem name="Profile" logo={<IoPersonOutline/>} setTab={props.setTab} tabSelected={props.tabSelected}/>
                    :
                        <></>
                }
            </div>
        </div>
    );
}

export default VerticalMenu;