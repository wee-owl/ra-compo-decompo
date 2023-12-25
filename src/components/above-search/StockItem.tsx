import React from 'react';
import { Props } from '../default/Props';

// компонент StockItem отвечает за отрисовку одного элемента валютного курса

const StockItem = ({ text, link }: Props) => {
  return (
    <li className='stock__item'>
      <a href={ link } className='stock__link'>
        <span>{ text }</span>
      </a>
    </li>
  );
};

export default StockItem;
