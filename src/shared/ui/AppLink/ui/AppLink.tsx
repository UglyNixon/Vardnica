import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme{
    Primary='primary',
    Secondary='secondary'
}
interface AppLinkProps extends LinkProps{
    className?:string;
    theme?:AppLinkTheme;
}

const AppLink:FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.Primary,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            {...otherProps}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>

    );
};

export default AppLink;
