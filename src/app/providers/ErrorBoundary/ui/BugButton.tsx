import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const handleThrowError = () => {
        setError((prevState) => !prevState);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={handleThrowError}>
            {t('throw error')}
        </Button>
    );
};
