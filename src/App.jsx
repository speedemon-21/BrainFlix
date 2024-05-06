import "../src/styles/partials/responsive.scss";

import React, { useState } from "react";
import logoImg from "../src/assets/Logo/BrainFlix-logo.svg"; // Import logo image
import userAvatarImg from "../src/assets/Images/Mohan-muruge.jpg";
import searchIcon from "../src/assets/Icons/search.svg"; // Import search icon image
import uploadIcon from "../src/assets/Icons/upload.svg";
import videoData from "../src/data/videos.json";
import videoDetailData from "../src/data/video-details.json";
import viewsIcon from "../src/assets/Icons/views.svg"; // Import views icon
import likesIcon from "../src/assets/Icons/likes.svg";
import commentIcon from "../src/assets/Icons/add_comment.svg";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]); // Default selected video

  // Function to handle video selection
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  // Filter out the selected video from the list of next videos
  const nextVideos = videoData.filter((video) => video.id !== selectedVideo.id);

  // Find the corresponding video details for the selected video
  const selectedVideoDetails = videoDetailData.find(
    (video) => video.id === selectedVideo.id
  );

  // Get the number of comments for the selected video
  const numberOfComments = selectedVideoDetails.comments.length;

  // Function to convert timestamp to dd/mm/yyyy format
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="mobile-layout">
      <img className="logo" src={logoImg} alt="BrainFlix Logo" />
      <div className="search-bar">
        <img className="search-icon" src={searchIcon} alt="Search Icon" />
        <input type="text" placeholder="Search" />
        <img className="user-avatar" src={userAvatarImg} alt="User Avatar" />
      </div>
      <button className="upload-button">
        <img className="upload-icon" src={uploadIcon} alt="Upload Icon" />
        UPLOAD
      </button>
      <div className="video-player">
        <video controls poster={selectedVideo.image}>
          <source src={selectedVideoDetails.video} type="video/mp4" />
          Video Here
        </video>
      </div>
      <div className="title">
        <h1 className="page-header">{selectedVideoDetails.title}</h1>
      </div>
      <hr className="divider" />
      <div className="description">
        <span className="subheader">By {selectedVideoDetails.channel}</span>
        <span>
          <img src={viewsIcon} alt="Views Icon" /> {selectedVideoDetails.views}
        </span>
        <span className="time">
          {formatDate(selectedVideoDetails.timestamp)}
        </span>
        <span>
          <img src={likesIcon} alt="Likes Icon" /> {selectedVideoDetails.likes}
        </span>
      </div>
      <hr className="divider" />
      <p className="video-description">{selectedVideoDetails.description}</p>

      {/* comment section */}
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
          {selectedVideoDetails.comments.map((comment, index) => (
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

      {/* next-video-section */}

      <div className="next-video-section">
        <h2>Next Video</h2>
        <div className="next-videos">
          {nextVideos.map((video) => (
            <div
              key={video.id}
              className="next-video"
              onClick={() => handleVideoSelect(video)}
            >
              <img src={video.image} alt={video.title} />
              <div className="video-info">
                <div className="info-text">
                  <h3>{video.title}</h3>
                  <p>{video.channel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
