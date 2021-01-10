
import React from 'react';
import './home.styles.css';
import NavBar from  '../../components/navBar/navBar.component';

const Home = () => {
    return (
      <div id = "home-page" className = "home-page">
        <NavBar/>
        <header className = "home-header">
            <div className = 'about'>
                I'm a 25-year-old, Chinese-Canadian.
              <br/>
                My passion is to work with talented individuals and solve complex problems with simple, elegant solutions.
              <br/>
                In my career, I have sought out diverse opportunities to apply my technical skills.
            </div>
            <div className = "hobbies">
              I also enjoy: 
              <span role="img" aria-label="Tech"> 💻 |</span>
              <span role="img" aria-label="Beer"> 🍺 | </span>
              <span role="img" aria-label="Basketball"> 🏀 |</span> 
              <span role="img" aria-label="Coffee"> ☕️</span>
            </div>
        </header>
      </div>
    );
};

export default Home;
