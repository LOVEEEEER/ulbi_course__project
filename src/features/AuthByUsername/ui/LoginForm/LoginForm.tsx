import {
    FC, memo, useCallback,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

// eslint-disable-next-line react/prop-types
const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

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
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
