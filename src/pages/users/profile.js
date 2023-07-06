import react from "react";

const Profilepage = () => {
    return (
        <>
            <div style={{width: '100%', height: '460px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                <button style={{backgroundColor: '#f94144', color:'white', width: '100px', height: '40px', marginLeft:'50px', marginBottom: '80px'}}>Ocijeni</button>
                <div style={{width: '50%', height: '100%', display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <img src="/slika.png" alt="profilnaSlika" style={{ height: 250, width: 200}}></img>
                    <h2><br/>Zdravo, <br/> Denis!</h2>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <button style={{backgroundColor: '#f94144', color:'white', width: '100px', height: '40px', marginLeft:'50px', marginBottom: '30px'}}>Bodovi</button>
                    <p style={{fontFamily: 'sans-serif'}}>Da li želite biti član našeg "Loyalty programa"?<br/> Učlanite se <a>ovdje</a>!</p>
                </div>
            </div>
            <div style={{ marginLeft: 35 }}>
              <h1>Moja putovanja</h1>
            </div>
            <div style={{ width: '85%', marginLeft: '7.5%', marginRight: '7.5%', marginTop: 50, marginBottom: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='/hawaii.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='/venice.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='/atena.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='/hawaii.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='/venice.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
              <div style={{ width: '30%', margin: 5 }}>
                  <img src='/atena.jpg' alt='kategorija' style={{ height: 200, width: '100%' }}></img>
              </div>
            </div>
        </>
    );
}

export default Profilepage;