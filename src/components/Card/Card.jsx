import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([])
    const [singleData, setSingleData] = useState({})
    const [showAll, setShowAll] = useState(false)
    const [uniqueId, setUniqueId] = useState(null)

    const handleShowAll = () => {
        setShowAll(true)
    }
    const handleSort = () => {
        const sortedData = data.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in)
        });
        setData([...data, sortedData])
    }

    useEffect(() => {
        // console.log('helloo use');
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
        // console.log(data.data);
    }, [uniqueId])

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://openapi.programming-hero.com/api/ai/tools`
            try {
                const res = await fetch(url)
                const value = await res.json()
                setData(value.data.tools);
                // console.log(value.data.tools);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    // console.log(singleData);
    return (
        <div>
            <span onClick={handleSort}><Button>Sort By Date</Button></span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 lg:px-12'>
                {
                    data.slice(0, showAll ? 12 : 6)?.map(singleData => <SingleData
                        key={singleData.id}
                        singleData={singleData}
                        setUniqueId={setUniqueId}
                    ></SingleData>)
                }
            </div>
            {!showAll &&
                <span onClick={() => handleShowAll()}>
                    <Button>See More</Button>
                </span>
            }
            <Modal singleData={singleData}></Modal>
        </div>
    );
};

export default Card;