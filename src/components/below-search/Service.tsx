import React from 'react';
import { Props } from '../default/Props';

// компонент Service отвечает за отрисовку одного элемента из списка сервисов

const Service = ({ title, link, src, serviceItems }: Props) => {
  const items = serviceItems ? serviceItems : false;

  return (
    <article className='service'>
      <h3><a href={ link }>{ title }</a></h3>
      { title === 'Погода' ? <img src={ src } alt='weather'></img> : false }
      <ul className='service__list'>
        { items ? items.map((item, i) => {
          return (
            <li className='service__item' key={i}>{ item }</li>
          )
        }) : false }
      </ul>
    </article>
  );
};

export default Service;
