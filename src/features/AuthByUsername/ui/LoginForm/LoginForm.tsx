import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofoсus className={cls.input} placeholder={t("Введите username")} type="text" />
            <Input className={cls.input} placeholder={t("Введите пароль")} type="text" />
            <Button className={cls.loginBtn}>
                {t("Войти")}
            </Button>
        </div>
    );
};
