import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from 'widgets/Navbar/ui/Navbar.module.scss';
import { SwitcherTheme } from 'widgets/SwitcherTheme';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
