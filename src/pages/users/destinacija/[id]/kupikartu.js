import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import destinationService from "@/services/destination";
import ticketService from "@/services/tickets";

const Kupikartu = () => {
  const [destination, setDestination] = useState([]);
  const router = useRouter();
  const id = router.query.id;
  const [message, setMessage] = useState(null);
  const { register, handleSubmit } = useForm();
  const [ukupnaCijena, setUkupnaCijena] = useState(0);

  const onSubmit = async (data) => {
    try {
      const { broj, kartica, datum, CVC } = data;
      const karta = await ticketService.buy({
        putovanje_id: id,
        kupac_id: 1, // Prilagodite prema vašoj aplikaciji
        broj_karata: parseInt(broj),
        broj_kartice: kartica,
        datum_valjanosti: datum,
        cvc: CVC,
        ukupna_cijena: ukupnaCijena
      });

      if (karta.status === 500) {
        return setMessage(karta.message);
      }

      router.push(`/users/destinacija/${destination.id}/destinacija`);
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    if (destination) {
        const novaUkupnaCijena = parseFloat(destination.cijena);
        setUkupnaCijena(novaUkupnaCijena);
    }
  }, [destination]);
  console.log(destination)

  return (
    <>
      {destination && (
        <div className="forma" style={{ margin: '20px', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: '400px', color: "white", backgroundColor: '#F94144', display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h2>Kupovina</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ margin: '20px', width: '400px', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <div style={{ height: '60px', width: '400px', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                <label htmlFor="broj">Broj aranžmana:</label>
                <input type="number" id="broj" name="broj" min={1} max={5} required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} {...register("broj")} />
              </div>
              <div  style={{ height: '60px', width: '400px', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                <label htmlFor="kartica">Broj kartice:</label>
                <input type="text" id="kartica" name="kartica" maxLength={16} minLength={16} required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} {...register("kartica")} />
              </div>
              <div  style={{ height: '60px', width: '400px', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                <label htmlFor="datum">Datum isteka:</label>
                <input type="text" id="datum" name="datum" required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} {...register("datum")} />
              </div>
              <div style={{ height: '60px', width: '400px', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                <label htmlFor="CVC">CVC:</label>
                <input type="text" id="CVC" name="CVC" maxLength={3} minLength={3} required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} {...register("CVC")} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p style={{ fontFamily: 'sans-serif' }}>Iskoristi bodove lojalnosti</p>
                <input type="checkbox" {...register("bodovi")} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "flex-end", alignItems: "flex-end", marginRight: '10px' }}>
                <p style={{ fontFamily: 'sans-serif', fontSize: '22' }}>Za platiti</p>
                <p style={{ fontFamily: 'sans-serif' }}>Cijena: {destination.cijena}</p>
                <p style={{ fontFamily: 'sans-serif' }}>Ukupno: {ukupnaCijena}</p>
              </div>
              <div style={{ height: '60px',width:'400px', display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: '#F94144' }}>
                <button type="submit" style={{ height: '25px', width: '100px', borderRadius: '10px', border: 'none', outline: 'none', padding: '5px' }}>Plati</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Kupikartu;