import userAvatarImg from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import "./CommentsSection.scss";

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
 
   
       <div className="comments-section">
        <div className="comments-container">
          <p className="comment-count">{numberOfComments} Comments</p>
          <div className="comments-plus">
          <div className="add-comment">
            <img
              className="save-avatar"
              src={userAvatarImg}
              alt="Save Avatar"
            />
            <div className="comment-input">
              <p className="join-conversation">JOIN THE CONVERSATION</p>
              <div className="form-group">
                <input
                  id="comment"
                  type="text"
                  placeholder="Add a new comment"
                />
              </div>
            </div>
          </div>

          <div className="button-container">
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
        </div>
      </div>

 
  );
};

export default CommentsSection;