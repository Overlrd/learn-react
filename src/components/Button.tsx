import React from 'react'
import { MouseEvent } from 'react'
interface Props {
    text: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success';
    onClick: () => void;
}
function Button({text, color = 'primary', onClick}: Props) {
  return (
    <button type='button' className={'btn btn-' + color} onClick={onClick}>{text}</button>
  )
}

export default Button