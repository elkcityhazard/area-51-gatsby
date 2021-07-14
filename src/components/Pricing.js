import * as React from 'react';
import Pricing from '../constants/Pricing';
import PriceCard from '../components/PriceCard';

const Prices = () => {
    return (
        <section className="pricing" id="pricing">
            <h3>Pricing</h3>
            <div className="pricing-container">
            {Pricing.map((price) => {
                return <PriceCard key={price.id} price={price.price} title={price.title}  includes={price.includes} extras={price.extras} description={price.description}></PriceCard>

            })}
            </div>
        </section>
    )
}

export default Prices;
