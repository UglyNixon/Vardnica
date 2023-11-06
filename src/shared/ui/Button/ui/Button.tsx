import {classNames} from "shared/lib/classNames";
import cls from './Button.module.scss'
import {FC} from "react";

export enum ButtonTheme {
    CLEAR='clear'
}
interface ButtonProps {
    className?:string;
    theme?:ButtonTheme
}

const Button:FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...other

    } = props

    const mods ={
        [cls[theme]]:true,
    }

    return (
        <button onClick={()=>console.log('asdasdadsa')} className={classNames(cls.Button,mods,[className])}>
            {children}
        </button>
    );
};
export default Button;