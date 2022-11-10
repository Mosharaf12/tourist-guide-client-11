import React from 'react';
import ReviewTable from '../ReviewTable/ReviewTable';

const ReviewSection = ({reviews,handleDelete}) => {

    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Message</th>
              <th>Delete</th>
              
            </tr>
          </thead>
          <tbody>
           
                  {
                      reviews.map(review=> <ReviewTable
                      key={review._id}
                      review={review}
                      handleDelete={handleDelete}
      
                      ></ReviewTable> )
                  }
      
          </tbody>
        </table>
      </div>
    );
};

export default ReviewSection;