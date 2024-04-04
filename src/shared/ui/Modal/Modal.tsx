import {
    FC, MouseEvent, MutableRefObject, PropsWithChildren, useCallback, useEffect, useRef, useState,
} from "react";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    className?: string,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const handleContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div
                        className={cls.content}
                        onClick={handleContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
