import {FC, useCallback} from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfilePageHeader.module.scss";
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { Text } from "shared/ui/Text/Text"
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ProfilePageHeader {
  className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeader> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadonly);

    const handleEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const handleCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch])

    const handleSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")} />
            {readonly ? (
                <Button 
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={handleEdit}
                >
                {("Редактировать")}
                </Button>
            ) : (
               <>
                <Button
                    className={cls.editBtn} 
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={handleCancelEdit}
                >
                    {t("Отменить")}
                    </Button>
                <Button 
                    className={cls.saveBtn} 
                    theme={ButtonTheme.OUTLINE}
                    onClick={handleSave}
                >
                    {t("Сохранить")}
                </Button>
               </>
            )}
        </div>
    )
}