import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation('main');
    return (
        <div>
            Main PAGE
            <div>{t('язык')}</div>
            <div>{t('новый')}</div>
        </div>
    );
};

export default MainPage;
