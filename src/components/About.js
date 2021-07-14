import * as React from 'react';
import Card from './Card';
import Cards from '../constants/Cards';



const About = () => {
    return (
        <section className="about-us" id="about">
            {Cards.map((card) => {
                return (
                    <Card key={card.id} title={card.title} icon={card.icon} text={card.text} url={card.url} image={card.image}></Card>
                    ) 
                    
            })}
        </section>
    )
}

export default About