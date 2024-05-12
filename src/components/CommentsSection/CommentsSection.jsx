import userAvatarImg from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";

const CommentsSection = (props) => {
    const { selectedVideoDetails } = props;

  // Get the number of comments for the selected video
  const numberOfComments = selectedVideoDetails.comments?.length || 0;
    // Function to convert timestamp to dd/mm/yyyy format
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };

  return (
    <div class="commments-section">
    <div className="comments-section">
       <div className="comments-section">
        <div calssName="comments-container">
          <p className="comment-count">{numberOfComments} Comments</p>
          <div className="add-comment">
            <img
              className="save-avatar"
              src={userAvatarImg}
              alt="Save Avatar"
            />
            <div className="comment-input">
              <p className="join-conversation">JOIN THE CONVERSATION</p>
              <div class="form-group">
                <input
                  id="comment"
                  type="text"
                  placeholder="Add a new comment"
                />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <button className="comment-button">
              <img
                className="comment-icon"
                src={commentIcon}
                alt="Comment Icon"
              />
              COMMENT
            </button>
          </div>
        </div>

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
      </div>
    </div>
    </div>
  );
};

export default CommentsSection;