import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <div className={classNames(cls.pageError, {}, [className ?? ''])}>
                <h2>{t('proizoshla-nepredvidennaya-oshibka')}</h2>
                <Button
                    theme={ThemeButton.BORDER}
                    // eslint-disable-next-line no-restricted-globals
                    onClick={() => location.reload()}
                >
                    {t('pozhaluista-perezagruzite-stranicu')}
                </Button>
            </div>
        </div>
    );
};
