import React,{useState} from 'react';
import OrderModal from "../order/OrderModal";

const CookieCard = ({bgStyle,name,fills,types}) => {
    const [openOrder,setOpenOrder] = useState(false);

    const handleOpen = () =>{
        setOpenOrder(!openOrder);
    }
    const closeHandle = () => setOpenOrder(false);
    return (
        <div className="my_card">
            <div className="my_card_side card_side-front">
                <div className="my_card_picture" style={bgStyle}>
                    &nbsp;
                    &nbsp;
                </div>
                <div className="my_card_heading">
                           <span className="my_card_heading-span">
                               {name}
                           </span>

                </div>
                <div className="card_button">
                    <a
                        onClick={handleOpen}
                        className="button button-success-full button-success-small"
                    >
                        הוספה לסל
                    </a>
                </div>
                <OrderModal
                    openDialog={openOrder}
                    closeHandle={closeHandle}
                    fills={fills}
                    types={types}
                    name={name}
                />
            </div>

        </div>
    );
};

export default CookieCard;
