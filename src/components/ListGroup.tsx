import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
    const [selectedIndex , setselectedIndex] = useState(-1);
  return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group active">
                {items.map((item, index)=> 
                <li key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                onClick={() => {
                    setselectedIndex(index);
                    onSelectItem(item)
                }}>
                {item}</li>)}
            </ul>
        </>
  );
}
export default ListGroup;