import React from 'react';
import AboveSearch from './components/above-search/AboveSearch';
import BelowSearch from './components/below-search/BelowSearch';
import Search from './components/search/Search';
import './App.css';

function App() {
  return (
    <main className='main'>
      <AboveSearch/>
      <Search/>
      <aside className='advt'>Рекламный блок</aside>
      <BelowSearch/>
    </main>
  );
};

export default App;
