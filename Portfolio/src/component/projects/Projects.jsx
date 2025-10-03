import React, { useEffect, useState } from 'react';
import Card from '../card/Card';

const Projects = () => {
    const [cards, setCards] = useState([]);


         useEffect(() => {
            fetch("/data.json")
            .then(res => res.json())
            .then(data => setCards(data))
        },[]);

      

    return (

        <div className='w-3/4 mx-auto mt-16'>
            <h3 className='text-white font-bold primary py-3 text-lg'>PR0JECTS</h3>
            <div className='flex justify-between'>
           {
              cards.map(card => <Card card={card}></Card>)
           }
           </div>
        </div>
    );
};

export default Projects;