import React from 'react';

const Loaders = ({type}) => {
    return (
        <div className='w-full justify-center flex flex-[1]'>
            <span  className={`${type ?"loader":"loader2"} block`}></span>  
        </div>
    );
};

export default Loaders;