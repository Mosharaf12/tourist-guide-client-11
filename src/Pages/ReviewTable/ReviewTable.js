import React from 'react';

const ReviewTable = ({review,handleDelete}) => {
    const {_id,img,email, message,name}= review;

    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3 pt-24">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="profile img" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
        {message}
          
        </td>
      
        <th>
          <button onClick={()=> handleDelete(_id)} className="btn btn-error">X</button>
        </th>
      </tr>
     
    );
};

export default ReviewTable;