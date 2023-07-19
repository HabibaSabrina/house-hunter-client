import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard';

const Houses = () => {
    const [houses, setHouses] = useState([])
    useEffect(() =>{
        fetch('https://house-hunter-server-habibasabrina.vercel.app/houses')
        .then(res => res.json())
        .then(data => setHouses(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-20 mx-32 mt-20'>
            {
                houses.map(house => <HouseCard key={house._id} house={house}></HouseCard>)
            }
        </div>
    );
};

export default Houses;