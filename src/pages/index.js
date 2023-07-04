import React from 'react';
import ImageBar from '../components/layouts/imagebar';
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';

const Landingpage = () => {
  
  return (
    <>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginLeft: 35 }}>
              <h1>Preporučeno za Vas!</h1>
          </div>
          <div>
              <ImageBar />
          </div>
          <div style={{ height: '250px', width: '80%', backgroundColor: '#f94144', marginLeft: '10%', marginRight: '10%', marginTop: 50, marginBottom: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <img src='./loyality.png' alt='Loyality program' style={{ width: '60%', height: 220 }}></img>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <h4 style={{ color: 'white' }}>PRIDRUŽITE SE NAŠEM</h4>
                  <h1 style={{ color: 'white' }}>LOYALTY</h1>
                  <h1 style={{ color: 'white' }}>PROGRAMU</h1>
              </div>
          </div>
          <div style={{ marginLeft: 35 }}>
              <h1>Popularne kategorije</h1>
          </div>
          <div style={{ width: '85%', marginLeft: '7.5%', marginRight: '7.5%', marginTop: 50, marginBottom: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='./hawaii.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='./venice.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='./atena.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='./hawaii.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='./venice.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='./atena.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
          </div>
          <div style={{ marginLeft: 35 }}>
              <h1>Recenzije</h1>
          </div>
          <div style={{ width: '85%', marginLeft: '7.5%', marginRight: '7.5%', marginTop: 50, marginBottom: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ width: '20%', margin: 5 }}>
                  <div style={{ height: 200, width: '100%', backgroundColor: '#f94144' }}></div>
              </div>
              <div style={{ width: '20%', margin: 5 }}>
                  <div style={{ height: 200, width: '100%', backgroundColor: '#f94144' }}></div>
              </div>
              <div style={{ width: '20%', margin: 5 }}>
                  <div style={{ height: 200, width: '100%', backgroundColor: '#f94144' }}></div>
              </div>
              <div style={{ width: '20%', margin: 5 }}>
                  <div style={{ height: 200, width: '100%', backgroundColor: '#f94144' }}></div>
              </div>
              <div style={{ width: '20%', margin: 5 }}>
                  <div style={{ height: 200, width: '100%', backgroundColor: '#f94144' }}></div>
              </div>
              <div style={{ width: '20%', margin: 5 }}>
                  <div style={{ height: 200, width: '100%', backgroundColor: '#f94144' }}></div>
              </div>
              <div style={{ width: '20%', margin: 5 }}>
                  <div style={{ height: 200, width: '100%', backgroundColor: '#f94144' }}></div>
              </div>
              <div style={{ width: '20%', margin: 5 }}>
                  <div style={{ height: 200, width: '100%', backgroundColor: '#f94144' }}></div>
              </div>
          </div>
      </div>
      </>
  );
};

export default Landingpage;