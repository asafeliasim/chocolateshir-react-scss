import React,{useState} from 'react';
import Checkbox from "@material-ui/core/Checkbox";

const CheckBoxCard = ({item,handleFill,fills}) => {
    const [check,setCheck] = useState(item.checked);

    const test = (e) => {
        e.preventDefault()
        for(const i in fills){
           if(fills[i].title !== item.title){
               fills[i].checked  = false
           }
        }
        item.checked = !item.checked;
        console.log("**********************")
        console.log(fills)
        console.log("**********************")

        setCheck(item.checked);
        console.log(check);
    }
    console.log(item)
    return (
        <>
            <li className="checked_list-item">
                <Checkbox
                    size="medium"
                    checked={check}
                    onChange={test}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <p className="text-muted mt-2 checked_list-item_p">{item.title}</p>
            </li>
        </>
    );
};

export default CheckBoxCard;
