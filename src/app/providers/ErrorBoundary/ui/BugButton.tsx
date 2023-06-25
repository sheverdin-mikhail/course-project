import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const BugButton: React.FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation('');

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            theme={ThemeButton.BORDER}
            onClick={() => setError((prev) => !prev)}
        >
            {t('throw-the-error')}
        </Button>
    );
};
