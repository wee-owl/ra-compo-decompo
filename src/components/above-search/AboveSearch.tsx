import React from 'react';
import { Props } from '../default/Props';
import Button from '../default/Button';
import StockItem from './StockItem';
import NewsItem from './NewsItem';
import Interest from './Interest';

// Компонент AboveSearch отвечает за отрисовку 
// содержимого блока Новостей и доп.рекламного блока 
// НАД поисковой строкой

const AboveSearch = ( {}: Props ) => {
  return (
    <section className='above-search'>
      <h2 hidden>Above Search</h2>
      <section className='news'>
        <h2 hidden>News</h2>
        <div className='news__accordion accordion'>
          <Button className='accordion__btn' text='Сейчас в СМИ'/>
          <Button className='accordion__btn' text='в Германии'/>
          <Button className='accordion__btn' text='Рекомендуем'/>
        </div>
        <time dateTime='2023-07-31 02:32'>31 июля, среда 02:32</time>
        <ul className='news__list'>
          <NewsItem text='news news news news news news news news news news' link='#0' src='#0'/>
          <NewsItem text='news news news news news news news news news news' link='#0' src='#0'/>
          <NewsItem text='news news news news news news news news news news' link='#0' src='#0'/>
          <NewsItem text='news news news news news news news news news news' link='#0' src='#0'/>
          <NewsItem text='news news news news news news news news news news' link='#0' src='#0'/>
        </ul>
      </section>
      <section className='stock'>
        <h2 hidden>Stock</h2>
        <ul className='stock__list'>
          <StockItem text='USD MOEX 63,52 +0,09' link='#0'/>
          <StockItem text='EUR MOEX 70,86 +0,14' link='#0'/>
          <StockItem text='НЕФТЬ 64,90 +1,63%' link='#0'/>
        </ul>
        <Button className='stock__btn' text='...'/>
      </section>
      <Interest title='Работа над ошибками' text='Смотрите на Яндексе и запоминайте' link='#0' src='#0'/>
    </section>
  );
};

export default AboveSearch;
