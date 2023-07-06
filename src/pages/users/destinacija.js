import react from "react";

const Destinacija = () => {
    return(
        <>
            <div style={{width: '100%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column", margin: '15px'}}>
                <img src="/venice.jpg" alt="slika" style={{}}></img>
                <div style={{width: '90%', display: "flex", justifyContent: 'space-around', alignItems: 'center '}}>
                    <div>
                        <h1>Makarska</h1>
                    </div>
                    <div style={{display: 'flex', flexDirection: "column", margin: '15px'}}>
                        <div style={{width: '85px', height: '40px', backgroundColor: '#43AA8B', borderRadius: '5px', display: 'table', marginBottom:'10px'}}>
                            <p style={{fontFamily:'sans-serif', color: 'white', textAlign: 'center', verticalAlign: 'middle', display: 'table-cell'}}>Bodovi</p>
                        </div>
                        <div style={{width: '85px', height: '40px', backgroundColor: '#F94144', borderRadius: '5px', display: 'table'}}>
                            <p style={{fontFamily:'sans-serif', color: 'white', textAlign: 'center', verticalAlign: 'middle', display: 'table-cell'}}>Cijena</p>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection:"column", width: '50%', justifyContent:'flex-start', alignItems: 'flex-start'}}>
                    <div>
                        <p style={{fontFamily: "sans-serif", textAlign: 'left'}}>Destinacija: Makarska, Hrvatska<br/>Trajanje: 5 noćenja</p>
                    </div>
                    <div>                        
                    <p style={{fontFamily: "sans-serif", textAlign: 'left'}}>Uključeno u ponudu:</p> 
                    <ul>
                        <li style={{fontFamily: "sans-serif"}}>Smještaj: Udoban apartman u blizini plaže s pogledom na more</li>
                        <li style={{fontFamily: "sans-serif"}}>Doručak: Ukusan doručak svakog jutra uključen u cijenu smještaja</li>
                        <li style={{fontFamily: "sans-serif"}}>Aktivnosti: Pristup raznim vodenim sportovima i mogućnost organiziranih izleta</li> 
                        <li style={{fontFamily: "sans-serif"}}>Obilasci: Mogućnost razgledavanja kulturnih znamenitosti u Makarskoj i okolici</li>
                        <li style={{fontFamily: "sans-serif"}}>Plaža: Blizina prekrasne pješčane plaže s kristalno čistim morem</li>
                        <li style={{fontFamily: "sans-serif"}}>Restorani: Preporuke za lokalne restorane sa bogatom ponudom mediteranske kuhinje</li>
                        <li style={{fontFamily: "sans-serif"}}>Slobodno vrijeme: Vrijeme za opuštanje na plaži, istraživanje okolnih otoka i večernje izlaske</li>
                    </ul>
                    </div>
                </div>
                <div style={{display: "flex", width: '50%', justifyContent:'flex-end', alignItems: 'flex-end', marginTop: '15px'}}>
                <div style={{width: '85px', height: '40px', backgroundColor: '#F94144', borderRadius: '5px', display: 'table'}}>
                            <p style={{fontFamily:'sans-serif', color: 'white', textAlign: 'center', verticalAlign: 'middle', display: 'table-cell'}}>KUPI</p>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Destinacija;