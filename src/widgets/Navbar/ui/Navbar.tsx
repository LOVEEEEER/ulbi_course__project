import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const handleToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={handleToggleModal}
            >
                {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={handleToggleModal}>
                Lorem ipsum dolor sit amet,
                consectetur
                adipisicing elit.
                Libero cumque
                nisi
                saepe, quis eveniet veritatis nemo.
                Sint omnis vitae qui, praesentium
                iste aperiam alias ducimus, fugit
                quis molestiae quas dolorem.
            </Modal>
        </div>
    );
};
