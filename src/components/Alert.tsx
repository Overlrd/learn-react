import React from 'react'
interface Props {
    children: string;
    onclose: () => void;
    visible?: boolean;
}
const Alert = ({ children , onclose , visible}: Props) => {
  return (
    <div className={`alert alert-warning alert-dismissible fade ${visible? 'show': null}`}>
        {children}
        <button onClick={onclose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert