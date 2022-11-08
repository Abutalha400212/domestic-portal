import React from 'react';
import ReviewList from './ReviewList/ReviewList';

const Review = ({events}) => {
    const handleDelete =() =>{
        
    }
    return (
        <div className="overflow-x-auto mt-10">
      <table className="table table-zebra w-full border-2 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Registating Date</th>
            <th>Volunteer List</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {events.map((e) => (
            <ReviewList key={e._id} e={e} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Review;