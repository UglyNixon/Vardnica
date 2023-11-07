import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import React from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string;
}

const Navbar = ({ className }:NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.Navbar_Container}>
            <AppLink
                key="main"
                to="/"
            >
                Main
            </AppLink>
            <AppLink
                className={cls.AnotherLink}
                key="about"
                to="/about"
            >
                About
            </AppLink>
        </div>
        <div className={cls.icons}>
            <ThemeSwitcher className={cls.menuIcon} />
            <LangSwitcher />
        </div>
    </div>
);

export default Navbar;
