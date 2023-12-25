import React from 'react';
import { Props } from './Props';


const Button = ({ className, text }: Props) => {
  return (
    <button className={ className } type='button'>{ text }</button>
  );
};

export default Button;