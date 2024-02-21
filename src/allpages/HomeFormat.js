import React from 'react';
import productData from '../alldata/AllProductsData';
import ProductCard from '../allcomponents/ProductsCardFormat';

const MainHome = () => {
    return (
        <>
            <section id="homes">
                <div className="container">
                    <div className="home_contents">
                        {
                            productData.map((item) => (
                                <ProductCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainHome;