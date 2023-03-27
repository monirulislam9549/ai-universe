import React from 'react';

const Button = ({ children }) => {
    // console.log(props.children);
    // const { children } = props
    return (
        <div className='text-center mt-4'>
            <button className="btn btn-primary">{children}</button>
        </div>
    );
};

export default Button;