import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?:string;
}
export const Navbar = ({ className }:NavbarProps) => (
    <div data-testid="Navbar" className={classNames(cls.Navbar, {}, [className])}>
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
            <SwitcherTheme className="mr-2" />
            <LangSwitcher />
        </div>
    </div>
);

