import React from 'react';

import CheckBoxCard from "./CheckBoxCard";






const CheckBoxList = ({fills,handleFill}) => {
    console.log(fills);
    return (
        <div className="checked">
            <ul className="">
                {fills && fills.map((item)=>(
                    <CheckBoxCard id={item.id} item={item} handleFill={handleFill} fills={fills}/>
                ))}
            </ul>
        </div>
    );
};

export default CheckBoxList;
