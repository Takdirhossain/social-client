import React, { useState } from 'react';

const Postlike = ({ps, setLike, like}) => {
    
    const handalelike = (id) => {
        fetch(`https://ecommerce-server-six.vercel.app/api/auth/${id}/like`, {
            method:"POST"
        }).then(res => res.json())
        .then(data => setLike(!like))
    }
    return (
        <div className="card mt-10 card-side bg-base-100 shadow-xl">
          <figure>
            <img className='w-80'
              src={ps.images}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{ps.title}</h2>
            <p>{ps.description}</p>
            
            <div className="card-actions justify-end">
              <div  className='flex items-center'>
              <button   onClick={() => handalelike(ps._id)} className="btn btn-primary">Make Like </button> 
              <p className='ml-4 text-2xl'>{ps.like}</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Postlike;



