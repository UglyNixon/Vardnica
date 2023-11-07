import { classNames } from 'shared/lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR='clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string;
    theme?:ButtonTheme
}

const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...other

    } = props;

    const mods = {
        [cls[theme]]: true,
    };

    return (
        <button type="button" {...other} className={classNames(cls.Button, mods, [className])}>
            {children}
        </button>
    );
};
export default Button;
