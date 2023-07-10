
import react, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import destinationService from "@/services/destination";



const Destinacija = () => {
    
    const [destination, setDestination] = useState([]);
    const router = useRouter();
    const id = router.query.id;
  
    async function getDestination() {
      try {
        const { data } = await destinationService.show(id);
        setDestination(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      getDestination();
    }, [id]);

    return(
        <>
       
        
{destination && (
   

            <div style={{width: '100%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column", margin: '15px'}} key={destination.id}>
                <img src={destination.slika_url} alt="slika" style={{width: '55%'}}></img>
                <div style={{width: '90%', display: "flex", justifyContent: 'space-around', alignItems: 'center '}}>
                    <div>
                        <h1>{destination.naziv}</h1>
                    </div>
                    <div style={{display: 'flex', flexDirection: "column", margin: '15px'}}>
                        <div style={{width: '85px', height: '40px', backgroundColor: '#43AA8B', borderRadius: '5px', display: 'table', marginBottom:'10px'}}>
                            <p style={{fontFamily:'sans-serif', color: 'white', textAlign: 'center', verticalAlign: 'middle', display: 'table-cell'}}>Bodovi: {destination.bodovi}</p>
                        </div>
                        <div style={{width: '85px', height: '40px', backgroundColor: '#F94144', borderRadius: '5px', display: 'table'}}>
                            <p style={{fontFamily:'sans-serif', color: 'white', textAlign: 'center', verticalAlign: 'middle', display: 'table-cell'}}>{destination.cijena}KM</p>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection:"column", width: '50%', justifyContent:'flex-start', alignItems: 'flex-start'}}>
                    <div>
                        <p style={{fontFamily: "sans-serif", textAlign: 'left'}}>Destinacija: {destination.destinacija}<br/>Trajanje: {destination.trajanje} noćenja</p>
                        <p style={{fontFamily: "sans-serif", textAlign: 'left'}}>Datum polaska: {new Date(destination.datum_polaska).toLocaleDateString('hr-HR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                    </div>
                    <div>                        
                    <p style={{fontFamily: "sans-serif", textAlign: 'left'}}>Uključeno u ponudu:</p> 
                    <p style={{fontFamily: "sans-serif", textAlign: 'left'}}>{destination.itinerer}</p>
                    </div>
                </div>
                <div style={{display: "flex", width: '50%', justifyContent:'flex-end', alignItems: 'flex-end', marginTop: '15px'}}>
                <a href={`/users/destinacija/${destination.id}/kupikartu`}>
                <div style={{width: '85px', height: '40px', backgroundColor: '#F94144', borderRadius: '5px', display: 'table'}}>
                            <p style={{fontFamily:'sans-serif', color: 'white', textAlign: 'center', verticalAlign: 'middle', display: 'table-cell'}}>KUPI</p>
                        </div>
                        </a>
                </div>
                </div>
)}

        </>
    );
}   
export default Destinacija;