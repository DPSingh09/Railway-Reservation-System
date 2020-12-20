import React from 'react';

class TrainDetails extends React.Component {
    
    render(){
      const {trains} = this.props;
     // console.log(trains);
      return(
     	 <div>
           <legend className="f2 fw6 ph0 mh0 center">Train Details</legend>
		    { trains.map(( details, index) => (
				  <article className=" tc dib br3 pa3 ma2 bw2 grow shadow-5">
				  <div key={index}>
				  <p className="f4 fw6 ph0 mh0 ">Train {index + 1}</p>
				  <p className="f6 fw6 ph0 mh0 center"> Train Number: {details.train_id}</p>
				  <p className="f6 fw6 ph0 mh0 center"> Date: {details.date_of_journey} </p>
				  <p className="f6 fw6 ph0 mh0 center"> Sleeper Coach: {details.sleeper}</p>
				  <p className="f6 fw6 ph0 mh0 center"> AC Coach: {details.ac}</p>		
				  <p className="f6 fw6 ph0 mh0 center"> AC Seat Booked: {details.ac_seat_booked}</p>	
				  <p className="f6 fw6 ph0 mh0 center"> Sleeper Seat Booked: {details.sleeper_seat_booked}</p>
				  </div>
				  </article>
	          ))}
         </div>  
     	)
   }
}	



export default TrainDetails;