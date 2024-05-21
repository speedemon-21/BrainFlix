import React from "react";
import { Link } from 'react-router-dom';
import './NextVideoSection.scss';

const NextVideoSection = ({ nextVideos }) => {
    return (
       
      <div className="next-video-section">
        <h2>NEXT VIDEOS</h2>
        <div className="next-videos">
          {nextVideos.length > 0 &&
          nextVideos.map((video) => (
            <Link key={video.id} to={`/video/${video.id}`}>
              <div
                className="next-video"
              >
                <img src={video.image} alt={video.title} />
                <div className="video-info">
                  <div className="info-text">
                    <h3>{video.title}</h3>
                    <p>{video.channel}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    );
  };
  

export default NextVideoSection;