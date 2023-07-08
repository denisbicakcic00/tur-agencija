import reviewsService, {load} from '@/services/reviews';
import React, {useEffect, useState} from 'react';

const Recenzija = () => {

  const [review, setReviews] = useState();
  async function getReviews(){
    const {data} = await reviewsService.load()
    setReviews(data)
  }
  useEffect(()=> {
    getReviews()
  }, [])


  return (
    <>
    
        <div style={{ width: '85%', marginLeft: '7.5%', marginRight: '7.5%', marginTop: 50, marginBottom: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        {review?.map(review => (
            <div style={{ width: '20%', margin: 5 }} key={review.id}>
                <div style={{ height: 200, width: '100%', backgroundColor: '#f94144', display:'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '10px' }}>
                  <p style={{fontFamily: "sans-serif", textAlign: 'center', color: 'white', verticalAlign: 'middle', display: 'table-cell'}}>"{review.komentar}"</p>
                  <p style={{fontFamily: "sans-serif", textAlign: 'right', color: 'white', verticalAlign: 'middle', display: 'table-cell', marginRight: '5px'}}>{review.ime_kupca}<br/>{review.ocjena}/5</p>

                </div>
            </div>))}
        </div>
        </>
  );
};

export default Recenzija;