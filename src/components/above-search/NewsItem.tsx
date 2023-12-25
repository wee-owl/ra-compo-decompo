import React from 'react';
import { Props } from '../default/Props';

// компонент NewsItem отвечает за отрисовку одной новостной строки

const NewsItem = ({ text, link, src }: Props) => {
  return (
    <li className='news__item'>
      <a href={ link } className='news__link'>
        <img src={ src } alt='preview'></img>
        <p>{ text }</p>
      </a>
    </li>
  );
};

export default NewsItem;
