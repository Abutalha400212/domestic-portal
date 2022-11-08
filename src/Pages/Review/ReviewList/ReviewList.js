import React from 'react';

const ReviewList = ({review ,handleDelete}) => {
    const {user,email,registerTime,EventName,_id} = review
    return (
        <tr>
        <td>{user}</td>
        <td>{email}</td>
        <td>{registerTime}</td>
        <td>{EventName}</td>
        <td><button onClick={()=> handleDelete(_id)} className='bg-red-600 px-2 rounded-lg text-white'>X</button></td>
      </tr>
    );
};

export default ReviewList;