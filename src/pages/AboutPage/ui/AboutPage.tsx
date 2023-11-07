import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t, i18n } = useTranslation('about');
    return (
        <div>
            ABOUT PAGE
            <div>{t('о нас')}</div>
        </div>
    );
};

export default AboutPage;
