import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Feedback = ({ id }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();


  const handleSubmit = (e) => {
    e.preventDefault();
  const feedbackData = {
    feedback: feedback,
    rating: rating,
    prevId: id,
    name: user.displayName,
    image:user.photoURL
  }
    try {
      axiosSecure.post('/feedback',feedbackData)
      .then(res=>console.log(res.data))
      
    } catch (error) {
      
    }

    // Clear form after submission
    setFeedback("");
    setRating(0);
  };

  return (
    <div>
      <button
      
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Feedback
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-sm">Rating</label>
              <div className="flex space-x-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={`w-8 h-8 text-lg rounded-full ${
                      rating >= star
                        ? "bg-yellow-400 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-medium text-sm">Your Feedback</label>
              <textarea
                className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your feedback here..."
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-success w-full">
                Submit Feedback
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Feedback;
