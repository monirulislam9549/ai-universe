import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url = `https://openapi.programming-hero.com/api/ai/tools`
            try {
                const res = await fetch(url)
                const value = await res.json()
                setData(value.data.tools);
                console.log(value.data.tools);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 lg:px-12'>

            {
                data.map(singleData => <SingleData
                    singleData={singleData}
                    key={singleData.id}
                ></SingleData>)
            }
        </div>
    );
};

export default Card;