import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../layout/AuthProvider';
import ReviewList from './ReviewList/ReviewList';

const Review = () => {
    const {user} = useContext(AuthContext)
    const [reviewItem,setReviewItem] = useState([])
    const [toggle,setToggle] = useState('')

useEffect(()=>{
    fetch(`http://localhost:5000/review?email=${user?.email}`)
    .then(res => res.json())
    .then(data => {
        if(data.success){
          setReviewItem(data.data)
          setToggle(data.success)  
        }
        })
},[user?.email])
    const handleDelete =(id) =>{
        fetch(`http://localhost:5000/review/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                const remaining = reviewItem.filter(e=> e._id !== id)
                setReviewItem(remaining) 
                toast.success(data.message)
            }
        })

    }
    return (
        <div>
        <div className="overflow-x-auto mt-10 w-11/12 mx-auto">
      <table className="table table-zebra w-full border-2 text-center">
        <thead>
          <tr>
            <th>Place Photo</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Reviewed Date</th>
            <th>Review Type</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {reviewItem.map((review) => (
            <ReviewList key={review._id} review={review} handleDelete={handleDelete} />
          ))}
        </tbody>
        
      </table>
      </div>
      <div className={` ${toggle === true && 'hidden'}`}>
      <h1 className={`text-2xl font-serif text-center `}>Review are not found </h1>
      </div>
    </div>
    );
};

export default Review;