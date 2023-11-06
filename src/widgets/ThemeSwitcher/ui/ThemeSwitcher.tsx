import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';

interface SwitcherThemeProps {
    className?:string,
}

export const ThemeSwitcher = ({ className }:SwitcherThemeProps) => {
    const { toggleTheme } = useTheme();
    return (
        <label
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            htmlFor="langInput"
        >
            <input
                className={classNames(cls.input,{},[])}
                type="checkbox"
                onChange={toggleTheme}
                id="langInput"
            />
            <span className={classNames(cls.slider, {}, [])} />
        </label>
    );
};
