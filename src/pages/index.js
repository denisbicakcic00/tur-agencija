import React, {useState, useEffect} from 'react';
import ImageBar from '../components/layouts/imagebar';
import Recenzija from '@/components/layouts/recenzije';
import { useRouter } from 'next/router';
import recenzijaService, {load} from '@/services/reviews';

const Landingpage = () => {

  /*  const [recenizija, setR] = useState();
    const router = useRouter();
    const id = router.query.id;
  async function getRecenzija(){
    const {data} = await recenzijaService.load()
    setRecenizija(data)
  }
  useEffect(()=> {
    getRecenizija()
  }, [])
*/
  
  return (
    <>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
          <div style={{ marginLeft: 35 }}>
              <h1>Preporučeno za Vas!</h1>
          </div>
          <div>
              <ImageBar />
          </div>
          <div style={{ height: '250px', width: '80%', backgroundColor: '#f94144', marginLeft: '10%', marginRight: '10%', marginTop: 50, marginBottom: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '15px' }}>
              <img src='./loyality.png' alt='Loyality program' style={{ width: '60%', height: 220, borderRadius: '15px' }}></img>
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
              <h1>O nama</h1>
          </div>
          <div style={{ marginLeft: 35 }}>
              <h2 style={{color: '#f94144'}}>Dobrodošli!</h2>
          </div>
          <div style={{ width: '85%', marginLeft: '7.5%', marginRight: '7.5%', marginTop: 50, marginBottom: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{width:'50%', fontFamily: 'sans-serif'}}>
                    <p>Mi smo strastveni tim profesionalaca koji se bavi organizacijom putovanja i pružanjem nezaboravnih 
                        iskustava za sve naše klijente. Sa sjedištem u predivnom turističkom odredištu, naša agencija ima bogato
                        iskustvo u pružanju visokokvalitetnih usluga putovanja.<br/><br/>Naša misija je jednostavna - stvoriti 
                        nezaboravna putovanja koja nadmašuju očekivanja naših klijenata. Bez obzira da li se radi o avanturističkom 
                        putovanju, odmoru na rajskim plažama, kulturološkom obilasku ili romantičnom bijegu, mi smo tu da vam 
                        pružimo personaliziranu uslugu i savjete kako bismo vam omogućili nevjerojatno iskustvo.</p>
                </div>
                <div style={{width: '50%'}}>
                    <img src='./fraza.png'></img>
                </div>
          </div>
          <div style={{ marginLeft: 35 }}>
              <h1>Recenzije</h1>
          </div>
          <Recenzija/>
      </div>
      </>
  );
};

export default Landingpage;