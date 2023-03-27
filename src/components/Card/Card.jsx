import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([])
    const [showAll, setShowAll] = useState(false)
    const handleShowAll = () => {
        setShowAll(true)
    }
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
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 lg:px-12'>
                {
                    data.slice(0, showAll ? 12 : 6).map(singleData => <SingleData
                        key={singleData.id}
                        singleData={singleData}
                    ></SingleData>)
                }
            </div>
            {!showAll &&
                <span onClick={() => handleShowAll()}>
                    <Button>See More</Button>
                </span>
            }
        </div>
    );
};

export default Card;