import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import { ProfileType } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
   className?: string;
   data?: ProfileType,
   error?: string;
   isLoading?: boolean;
   readonly?: boolean;
   onChangeFirstName?: (val: string) => void;
   onChangeLastName?: (val: string) => void;
   onChangeAge?: (val: string) => void;
   onChangeCity?: (val: string) => void;
   onChangeUsername?: (val: string) => void;
   onChangeAvatar?: (val: string) => void;
   onChangeCountry?: (val: Country) => void;
   onChangeCurrency?: (currency: Currency) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            src={data.avatar}
                            alt="avatar" 
                        />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t("Ваше имя")}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t("Город")}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t("Имя пользователя")}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t("Введите ссылку на аватар")}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
});
