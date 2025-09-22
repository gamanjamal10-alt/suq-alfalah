
import React from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="p-4 bg-green-600 text-white flex justify-between">
      <h1>{t('welcome')}</h1>
      <div>
        <button onClick={() => changeLanguage('ar')}>🇩🇿 AR</button>
        <button onClick={() => changeLanguage('fr')} className="ml-2">🇫🇷 FR</button>
      </div>
    </nav>
  );
}

export default Navbar;
