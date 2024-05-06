import '../src/styles/partials/responsive.scss';

//import './App.scss'
//import Header from './components/Header'
//import CardList from './components/CardList'
//import CardForm from './components/CardForm'
import React, { useState } from 'react';
//import CardForm from './components/CardForm';

import logoImg from '../src/assets/Logo/BrainFlix-logo.svg'; // Import logo image
import userAvatarImg from '../src/assets/Images/Mohan-muruge.jpg'; 
import searchIcon from '../src/assets/Icons/search.svg'; // Import search icon image
import uploadIcon from '../src/assets/Icons/upload.svg';

const App = () => {
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
          Upload
        </button>
      </div>
          );
  };











/*function App() {
  // Define state for storing card contents
  const [cardContent, setCardContent] = useState([
      { id: 1, title: 'Card 1', content: 'Content of Card 1' },
      { id: 2, title: 'Card 2', content: 'Content of Card 2' },
      { id: 3, title: 'Card 3', content: 'Content of Card 3' }
  ]);

  const addCard = (title, content) => {
    // Create a new card object
    const newCard = {
        id: cardContent.length + 1, // Generate a unique id
        title: title,
        content: content
    };
    // Update cardContent state by adding the new card
    setCardContent(prevCardContent => [...prevCardContent, newCard]);
};


  return (
      <div>
          <h1>Card List Example</h1>
          {//Pass cardContent state and setCardContent function as props to CardList }
          <CardList cardContent={cardContent}/>
          <CardForm addCard={addCard} />
      </div>
  );
}

*/




export default App;
