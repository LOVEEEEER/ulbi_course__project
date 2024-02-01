import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.userNameChanged(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginActions.passwordChanged(value));
    }, [dispatch]);

    const handleLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("Форма авторизации")} />
            {error && <Text text={t("Вы ввели неверный логин или пароль")} theme={TextTheme.ERROR} />}
            <Input
                autofoсus
                className={cls.input}
                placeholder={t("Введите username")}
                type="text"
                value={username}
                onChange={handleChangeUsername}
            />
            <Input
                className={cls.input}
                placeholder={t("Введите пароль")}
                type="text"
                value={password}
                onChange={handleChangePassword}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={handleLoginClick}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});
