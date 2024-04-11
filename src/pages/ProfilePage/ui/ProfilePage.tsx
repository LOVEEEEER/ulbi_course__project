import {
    ProfileCard,
    ValidateProfileError,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { DynamicModuleLoader, ReducersList }
    from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Text, TextTheme } from "shared/ui/Text/Text";

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t("Данные не указаны"),
        [ValidateProfileError.NO_DATA]: t("Имя и фамилия обязательны"),
        [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    };

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const handleChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || "" }));
    }, [dispatch]);

    const handleChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastName: value || "" }));
    }, [dispatch]);

    const handleChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const handleChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || "" }));
    }, [dispatch]);

    const handleChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || "" }));
    }, [dispatch]);

    const handleChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || "" }));
    }, [dispatch]);

    const handleChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const handleChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={reducers}
        >
            <div>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors?.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[error]}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={handleChangeFirstName}
                    onChangeLastName={handleChangeLastName}
                    onChangeAge={handleChangeAge}
                    onChangeCity={handleChangeCity}
                    onChangeUsername={handleChangeUsername}
                    onChangeAvatar={handleChangeAvatar}
                    onChangeCurrency={handleChangeCurrency}
                    onChangeCountry={handleChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
