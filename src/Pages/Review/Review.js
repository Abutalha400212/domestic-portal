import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useHooks from "../../Hooks/useHooks";
import { AuthContext } from "../../layout/AuthProvider";
import ReviewList from "./ReviewList/ReviewList";

const Review = () => {
  useHooks("Review");
  const { user, logout } = useContext(AuthContext);
  const [reviewItem, setReviewItem] = useState([]);

  useEffect(() => {
    fetch(`https://domestic-travel-server.vercel.app/review?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setReviewItem(data.data);
        }
      });
  }, [user?.email, logout]);
  const handleDelete = (reviews) => {
    fetch(`https://domestic-travel-server.vercel.app/review/${reviews._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const remaining = reviewItem.filter((e) => e._id !== reviews._id);
          setReviewItem(remaining);
          toast.success(`Item deleted on ${reviews._id}`);
        }
      });
  };
  return (
    <div>
      {reviewItem.length === 0 && "hidden" ? (
        <>
          <div className={`${reviewItem.length > 0 && "hidden"}`}>
            <h1 className={`text-2xl font-serif text-center `}>
              Review are not found{" "}
            </h1>
          </div>
        </>
      ) : (
        <>
          <div className="overflow-x-auto mt-10 w-11/12 mx-auto bg-slate-400">
            <table className="table table-zebra w-full border-2 text-center bg-slate-400">
              <thead className="">
                <tr>
                  <th>Reviewer</th>
                  <th>Email ID</th>
                  <th>Reviews</th>
                  <th>Reviewed Time</th>
                  <th>Ratings</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className="font-semibold">
                {reviewItem.map((review) => (
                  <ReviewList
                    key={review._id}
                    reviews={review}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Review;
