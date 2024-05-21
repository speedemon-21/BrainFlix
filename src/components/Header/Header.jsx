import logoImg from "../../assets/Logo/BrainFlix-logo.svg"; // Import logo image
import userAvatarImg from "../../assets/Images/Mohan-muruge.jpg";
import searchIcon from "../../assets/Icons/search.svg"; // Import search icon image
import uploadIcon from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
import './Header.scss';


const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo-container">
          <img className="logo" src={logoImg} alt="BrainFlix Logo" />
        </div>
      </Link>
      <div className="search-bar">
        <img className="search-icon" src={searchIcon} alt="Search Icon" />
        <input type="text" placeholder="Search" />
        <img className="user-avatar" src={userAvatarImg} alt="User Avatar" />
      </div>
      <Link to="/upload">
        <button className="upload-button">
          <img className="upload-icon" src={uploadIcon} alt="Upload Icon" />
          UPLOAD
        </button>
      </Link>

    </header>
  );
};

export default Header;
