import React from 'react';
import { Props } from '../default/Props';
import Service from './Service';

// Компонент BelowSearch отвечает за отрисовку 
// содержимого блока Сервисы ПОД поисковой строкой

const BelowSearch = ( {}: Props ) => {
  return (
    <section className='below-search'>
      <h2 hidden>Search</h2>
      <Service title='Погода' serviceItems={['текст']} link='#0' src='#0'/>
      <Service title='Посещаемое' serviceItems={['текст', 'текст', 'текст']} link='#0'/>
      <Service title='Карта Германии' serviceItems={['текст']} link='#0'/>
      <Service title='Телепрограмма' serviceItems={['текст', 'текст', 'текст']} link='#0'/>
      <Service title='Эфир' serviceItems={['текст', 'текст', 'текст']} link='#0'/>
    </section>
  );
};

export default BelowSearch;
