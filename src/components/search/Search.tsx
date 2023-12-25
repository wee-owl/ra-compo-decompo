import React from 'react';
import { Props } from '../default/Props';
import Button from '../default/Button';
import NavItem from './NavItem';

// Компонент Search отвечает за отрисовку 
// логотипа, навигационных ссылок, строки поиска, доп.текста

const Search = ( {}: Props ) => {
  return (
    <section className='search'>
      <h2 hidden>Search</h2>
      <div className='search__logo'>
        <img src='#0' alt='logo'></img>
      </div>
      <div className='search__container'>
        <nav className='search__nav nav'>
          <ul className='nav__list'>
            <NavItem text='Видео' link='#0'/>
            <NavItem text='Картинки' link='#0'/>
            <NavItem text='Новости' link='#0'/>
            <NavItem text='Карты' link='#0'/>
            <NavItem text='Маркет' link='#0'/>
            <NavItem text='Переводчик' link='#0'/>
            <NavItem text='Эфир' link='#0'/>
            <NavItem text='еще' link='#0'/>
          </ul>
        </nav>
        <div className='search__wrapper'>
          <form action="#0" method='get' className='search__form'>
            <input type='search' name='search' className='search__input' required></input>
            <Button className='search__btn-keyboard' text=''/>
          </form>
          <Button className='search__btn' text='Найти'/>
        </div>
        <p>Найдется все. Например, <a href='#0'>фаза луны сегодня</a></p>
      </div>
    </section>
  );
};

export default Search;
