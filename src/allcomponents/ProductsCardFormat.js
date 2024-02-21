import React, { useContext, useState } from 'react';
import allCartContext from '../allcontext/allCartContext';


const MainProductsCard = (props) => {

    const { img, rating, title, price } = props;

    const { itemAdd } = useContext(allCartContext);

    const [isAdded, setIsAdded] = useState(false);


    const AddToCartHandler = () => {

        // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
        const item = { ...props };
        itemAdd(item);

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 2000);

    };


    return (
        <>
            <div className="products_card">
                <figure>
                    <img src={img} alt="item-img" />
                </figure>
                <strong className="rating">{rating}</strong>
                <h4 className="title">{title}</h4>
                <h3 className="price">₹ {price.toLocaleString()}</h3>
                <button
                    type="button"
                    className={`btn ${isAdded ? 'added' : ''}`}
                    onClick={AddToCartHandler}
                >
                    {isAdded ? 'Item Added' : 'Add to cart'}
                </button>
            </div>
        </>
    );
};

export default MainProductsCard;