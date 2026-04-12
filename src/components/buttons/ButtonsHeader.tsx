import  "./ButtonsHeaderCSS.css";


    interface IButtonProps {
        textp: string;
        onClickp?: () => void;
    }



export const ButtonsHeader = ({textp, onClickp}: IButtonProps) => {

    return (


        <button className="button-css" onClick={onClickp}>

            {textp}

        </button>
    )
}