

import "./CommentsList.scss";

const CommentsList = (props) => {
    const { selectedVideoDetails } = props;

  // Get the number of comments for the selected video
 
    // Function to convert timestamp to dd/mm/yyyy format
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };

  return (

        <div className="comments-list">
          {selectedVideoDetails.comments &&
          selectedVideoDetails.comments.map((comment, index) => (
            <div key={comment.id} className="comment">
              <hr className="divider" />
              <div className="first-row">
                <div
                  className="avatar"
                  style={{ backgroundColor: "grey" }}
                ></div>
                <div className="info">
                  <p className="name">{comment.name}</p>
                  <p className="time">{formatDate(comment.timestamp)}</p>
                </div>
              </div>
              <p className="comment-text">{comment.comment}</p>
            </div>
          ))}
        </div>
 
  );
};

export default CommentsList;