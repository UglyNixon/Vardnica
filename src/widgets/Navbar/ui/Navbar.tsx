import {classNames} from "shared/lib/classNames";
import {AppLink} from "shared/ui/AppLink";
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import React from "react";
import {IconButton} from "shared/ui/IconButton";
import {IconButtonSize, IconColor} from "shared/ui/IconButton/ui/IconButton";
import MenuCloseIcon from 'shared/assets/icons/menuClose.svg'

interface NavbarProps {
    className?:string;
}

const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar,{},[className])}>
            <div className={cls.Navbar_Container}>
                <AppLink
                    key={'main'}
                    to={'/'}
                >Main
                </AppLink>
                <AppLink
                    className={cls.AnotherLink}
                    key={'about'}
                    to={'/about'}
                >About
                </AppLink>
            </div>
            <div className={cls.icons}>
                <ThemeSwitcher className={cls.menuIcon}/>
                <IconButton size={IconButtonSize.M} color={IconColor.MAIN} >
                        <MenuCloseIcon/>
                </IconButton>
            </div>
        </div>
    );
};

export default Navbar;