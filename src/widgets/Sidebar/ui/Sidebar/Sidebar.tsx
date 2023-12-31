import { classNames } from 'shared/lib/classNames';
import React, { useState } from 'react';
import { IconButton, IconButtonSize, IconColor } from 'shared/ui/IconButton/ui/IconButton';
import MenuCloseIcon from 'shared/assets/icons/menuClose.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <IconButton onClick={onToggle} size={IconButtonSize.M} color={IconColor.SECONDARY}>
                <MenuCloseIcon />
            </IconButton>
        </div>

    );
};

export default Sidebar;
