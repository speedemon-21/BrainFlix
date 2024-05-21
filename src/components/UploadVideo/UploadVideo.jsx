import "../../styles/partials/responsive.scss";

import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";
import "./UploadVideo.scss"

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadVideo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate(); // useNavigate hook for navigation
  
    const handlePublish = async () => {
      if (title.trim() === '' || description.trim() === '') {
        alert('Title and description are required.');
        return;
      }
  
      try {
        await axios.post('http://localhost:5050/videos', {
          title: title,
          description: description,
        });
  
        alert('Video Uploaded');
        navigate('/'); // Navigate back to the videos page
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    };
  
    const handleCancel = () => {
      navigate('/'); // Navigate back to the video player page
    };
  
    return (
      <div className="upload-video">
        <h1>Upload Video</h1>
        <h2>Video Thumbnail</h2>
        <div className = "thumbnail">
        <img src={videoThumbnail} alt="video Thumbnail" /></div>
        <div className="titleVideo">
          <h2>TITLE YOUR VIDEO</h2>
          <div className="video-title">
            <input
              id="video-title"
              type="text"
              placeholder="Add a title to your video"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="titleVideo">
          <h2>VIDEO DESCRIPTION</h2>
          <div className="video-description">
            <input
              id="video-description"
              type="text"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
  
        <div className="publish">
          <button className="upload-button" onClick={handlePublish}>
            <img className="publish-icon" src={uploadIcon} alt="publish Icon" />
            PUBLISH
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
        <hr className="divider" />
      </div>
    );
  };
  
export default UploadVideo;
