import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    element?: HTMLElement
}

export const Portal: FC<PropsWithChildren<PortalProps>> = (props) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
