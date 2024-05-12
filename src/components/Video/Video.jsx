import viewsIcon from "../../assets/Icons/views.svg"; // Import views icon
import likesIcon from "../../assets/Icons/likes.svg";

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

const Video = ({ selectedVideo }) => {
    return (
      <div className="video-page-container">
        <div className="video-player">
        <video controls poster={selectedVideo.image}>
          <source src={selectedVideo.video} type="video/mp4" />
          Video Here
        </video>
      </div>
      <div className="video-page-section">
      <div className="title">
        <h1 className="page-header">{selectedVideo.title}</h1>
      </div>
      <hr className="divider" />
      <div className="description">
        <div>
        <span className="subheader">By {selectedVideo.channel}</span>
        <span className="time">
          {formatDate(selectedVideo.timestamp)}
        </span>
        </div>
        <div>
        <span>
          <img src={viewsIcon} alt="Views Icon" /> {selectedVideo.views}
        </span>
      
        <span>
          <img src={likesIcon} alt="Likes Icon" /> {selectedVideo.likes}
        </span>
        </div>
      </div>
      <hr className="divider" />
      <p className="video-description">{selectedVideo.description}</p>
      </div>
      </div>
    );
  };
  
  export default Video;