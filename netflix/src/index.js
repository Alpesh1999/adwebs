import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <>
    <div className="cards">
      <div className="card">
        <img src="https://wallpaperaccess.com/full/4486484.jpg" alt="mypic" className="card_img" />
        <div className="card_info">
          <span className="card_category">A Netflix Original Series</span>
          <h3 className="card_title">SCAM 1992</h3>
          <a href="" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>,
  document.getElementById('root')
);

