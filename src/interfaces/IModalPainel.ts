import { ReactNode } from "react";

export default interface IModalPainel {
    isOpen: boolean,
    children: ReactNode,
    setModal: () => void
}