import React from 'react';

const Modal = (props) => {
    // console.log(props);
    const { image_link, description, integrations, features } = props?.singleData
    console.log(Object.values(integrations || {}));
    // console.log(features);
    // console.log(Object.values(features || {}));
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">

                        <div className="card-body border border-red-600 rounded-lg mx-5">
                            <h2 className="card-title">{description ? description : 'Not Found'}</h2>

                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-xl font-bold'>
                                        Features
                                    </h1>
                                    {
                                        Object.values(features && features || {})?.map(value => <li>{value.feature_name ? value.feature_name : "Not Found"}</li>)
                                    }
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>
                                        Integrations
                                    </h1>
                                    {
                                        integrations && integrations?.map(int => <li>{int ? int : "Not Found"}</li>)
                                    }
                                </div>
                            </div>


                        </div>
                        <figure><img className='w-full h-96' src={image_link && image_link[0]} alt="Album" /></figure>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;