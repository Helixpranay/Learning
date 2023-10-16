import React, { Suspense } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

function HeaderComponent(){
  const {t, i18n} = useTranslation();
  return <div>
    <h1>{t('title', {library: 'react i18-next'})}</h1>
    <button onClick={() => i18n.changeLanguage('hi')}>hi</button>
    <button onClick={() => i18n.changeLanguage('en')}>en</button>
  </div>
}


  function App() {
    return (
    <Suspense fallback="loading">
      <div className='App'>
        <HeaderComponent />
      </div>
    </Suspense>
    );
  }
  
  export default App;
