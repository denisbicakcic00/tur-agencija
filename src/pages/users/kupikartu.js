import react from "react";

const Kupikartu = () => {
    return(
        <>
            <div class="forma" style={{ margin: '20px', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: '400px', color: "white", backgroundColor: '#F94144', display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h2>Kupovina</h2>
            </div>

            <form >
                <div style={{ margin: '20px', width: '400p', xdisplay: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ height: '60px', width: '400px', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                        <label for="Broj aranžmana">Broj aranžmana:</label>
                        <input type="number" id="broj" name="broj" min={1} max={5} required style={{ height: '25px', borderRadius: '10px', padding: '5px' }}></input>
                    </div>
                    <div style={{ height: '60px', width: '400p', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                        <label for="Broj kartice">Broj kartice:</label>
                        <input type="text" id="kartica" name="kartica" required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} ></input>
                    </div>
                    <div style={{ height: '60px', width: '400p', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                        <label for="datum">Datum isteka:</label>
                        <input type="text" id="datum" name="datum" required style={{ height: '25px', borderRadius: '10px', padding: '5px' }} ></input>
                    </div>
                    <div style={{ height: '60px', width: '400p', display: "flex", justifyContent: "space-between", alignItems: "space-around" }}>
                        <label for="CVC">CVC:</label>
                        <input type="text" id="CVC" name="CVC" required style={{ height: '25px', borderRadius: '10px', padding: '5px' }}></input>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <p style={{fontFamily:'sans-serif'}}>Iskoristi bodove lojalnosti</p> 
                    <input type="checkbox"></input>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: "flex-end", alignItems: "flex-end", marginRight: '10px'}}>
                        <p style={{fontFamily:'sans-serif', fontSize: '22'}}>Za platiti</p>
                        <p style={{fontFamily:'sans-serif'}}>Cijena:</p>
                        <p style={{fontFamily:'sans-serif'}}>Popust:</p>
                        <h2>Ukupno:</h2>
                    </div>
                    <div style={{ height: '60px', display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: '#F94144' }}>
                        <button type="submit" style={{ height: '25px', width: '100px', borderRadius: '10px', border: 'none', outline: 'none', padding: '5px' }}>Plati</button>
                    </div>
                </div>
            </form>

        </div>
        </>
    );
}

export default Kupikartu;