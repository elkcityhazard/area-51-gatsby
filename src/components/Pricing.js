import * as React from 'react';
import Pricing from '../constants/Pricing';
import PriceCard from '../components/PriceCard';

const Prices = () => {
    const [indexValue, setIndexValue] = React.useState(0);
    const {id, price, title, includes, extras, description} = Pricing[indexValue]
    return (
        <section className="pricing" id="pricing">
            <h3>Pricing</h3>
            <div className="pricing-container">
                <div className="col">
                    {Pricing.map((item, index) => {
                        return (
                            <button key={index} className={index === indexValue ? "price-button active" : "price-button"}  onClick={() => setIndexValue(index)}>{item.title}</button>
                        )
                    })}
                </div>
                <div className="col">
               <PriceCard key={id} price={price} title={title}  includes={includes} extras={extras} description={description}></PriceCard>
                </div>
            </div>
        </section>
    )
}

export default Prices;
