import React from 'react';
import './App.css';
import foodList from './foodList.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="main">

      {
        foodList.map((data, index) => {
          return (
            <div key={index} className="sub_div">
              <h1>React Food Menu </h1><br />
              <h3 className="name">{data.m1.name}</h3>
              <p className="description">{data.m1.description}</p>
              <p className="price"><FontAwesomeIcon icon={faIndianRupeeSign} style={{ color: "#a52a2a", fontSize: "15" }} />{data.m1.price}</p>

              <hr />

              <h3 className="name">{data.m2.name}</h3>
              <p className="description">{data.m2.description}</p>
              <p className="price"><FontAwesomeIcon icon={faIndianRupeeSign} style={{ color: "#a52a2a", fontSize: "15" }} />{data.m2.price}</p>
              <hr />

              <h3 className="name">{data.m3.name}</h3>
              <p className="description">{data.m3.description}</p>
              <p className="price"><FontAwesomeIcon icon={faIndianRupeeSign} style={{ color: "#a52a2a", fontSize: "15" }} />{data.m3.price}</p>
              <hr />

              <h3 className="name">{data.m4.name}</h3>
              <p className="description">{data.m4.description}</p>
              <p className="price"><FontAwesomeIcon icon={faIndianRupeeSign} style={{ color: "#a52a2a", fontSize: "15" }} />{data.m4.price}</p>
              <hr />
            </div>



          )
        }
        )
      }
    </div>
  )
}
export default App;