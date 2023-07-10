import profileService from "@/services/profile";
import { useRouter } from "next/router";
import react, { useEffect, useState } from "react";

const Profilepage = () => {

    const [user, setUser] = useState();
    const [putovanja, setPutovanja] = useState([]);

    const router = useRouter;
    const id = 1;

    async function getUser(){
        try{
            const {data} = await profileService.load(id);
            setUser(data.user);
            setPutovanja(data.putovanja);
        } catch (error){
            console.error(error);
        }
    }

    useEffect(()  => {
        getUser();
    },[id]);

    return (
        <>
        {user && (
            <div key={user.id}>
            <div style={{width: '100%', height: '460px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                <a href="/users/recenzija">
                    <button style={{backgroundColor: '#f94144', color:'white', width: '100px', height: '40px', marginLeft:'50px', marginBottom: '80px'}}>Ocijeni</button>
                </a>
                <div style={{width: '50%', height: '100%', display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <img src="/slika.png" alt="profilnaSlika" style={{ height: 250, width: 200}}></img>
                    <h2><br/>Zdravo, <br/> {user.ime}!</h2>
                </div>
                <div style={{marginBottom: '0px'}}>
                    <button style={{backgroundColor: '#f94144', color:'white', width: '100px', height: '40px', marginLeft:'50px', marginBottom: '80px'}}>Bodovi: {user.bodovi}</button>
                </div>
            </div>
            <div style={{ marginLeft: 35 }}>
              <h1>Moja putovanja</h1>
            </div>
            <div style={{ width: '85%', marginLeft: '7.5%', marginRight: '7.5%', marginTop: 50, marginBottom: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                {putovanja?.map((putovanje) => 
              <div style={{ width: '30%', margin: 5 }}>
                  <a href={`/users/destinacija/${putovanje.id}/destinacija`}>
                    <img src={putovanje.slika_url} alt='kategorija' style={{ height: 200, width: '100%' }}></img>
                    </a>
                  <p style={{fontFamily: "sans-serif"}}>{putovanje.naziv}</p>
              </div>
              )}
            </div>
            </div>
            )}
      </>
    );
}

export default Profilepage;