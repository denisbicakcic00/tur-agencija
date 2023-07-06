import React from "react";

function Footer(props){
    return (
        <footer style={{height: '250px', backgroundColor: "green"}}>
            <div style={{ height: '250px', color: 'white', backgroundColor: '#43AA8B', border: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'  }}>
                <div>
                    <h3 style={{color: "white"}}>TURISTIČKA AGENCIJA</h3>
                    <p>Školska 10</p>
                    <p>72000, Zenica</p>
                </div>
                <div>
                    <h3 style={{color: "white"}}>KONTAKT</h3>
                    <p>060/307-4200</p>
                    <p>turisticka@agencija.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;