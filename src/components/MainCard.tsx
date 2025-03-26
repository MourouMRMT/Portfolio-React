import React,  { useState, useEffect } from "react";
import "../styles/mainCard.css";

const MainCard: React.FC = () => {

    const [style, setStyle] = useState({ opacity: 1, transform: "scale(1)" });

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        // Calcule l'opacité et l'échelle en fonction de la position de défilement
        const newOpacity = Math.max(1 - scrollPosition / 600, 0);
        const newScale = Math.max(1 + scrollPosition / 1000, 0.9); 
  
        setStyle({
          opacity: newOpacity,
          transform: `scale(${newScale})`,
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Nettoie l'écouteur d'événements
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <section className="main-card" style={style}>
      <div className="main-card-content">
        <img
          //src="/path-to-your-photo.jpg"
          //alt="Profile"
          //className="profile-image"
       />
        <h1 className="name">Mourougen MARIMOUTOU</h1>
        <p className="profession">Embedded Systems Engineer</p>
        <div className="social-links">
          <a href="https://github.com/MourouMRMT" target="_blank" rel="noreferrer">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                fill="currentColor" 
                className="bi bi-github icon" 
                viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40"        
                fill="currentColor" 
                className="bi bi-linkedin icon" 
                viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </a>
        </div>
        <button className="download-cv">
          <a href="/path-to-cv.pdf" download>Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default MainCard;
