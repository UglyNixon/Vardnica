import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
interface SidebarProps {
    className?:string;
}

const Sidebar = ({className}:SidebarProps) => {
    const [collapsed,setCollapsed]=useState(false)
    return (
        <div className={classNames(cls.Sidebar,{},[className])}>
          
        </div>


    );
};

export default Sidebar;