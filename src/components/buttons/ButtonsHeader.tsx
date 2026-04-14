import { FC } from "react";
import IButtonProps from "../../interfaces/IButtonProps";
import  "./ButtonsHeaderCSS.css";





export const ButtonsHeader: FC<IButtonProps> = ({textp, onClickp}) => {

    return (


        <button className="button-css" onClick={onClickp}>

            {textp}

        </button>
    )
}