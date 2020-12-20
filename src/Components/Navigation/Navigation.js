import React from 'react';

const Navigation = ({onRouteChange, route}) => {
	if(route === 'signin'){
	 return(
	     <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
	       <div className="flex-grow grow flex items-center"> 
	         <p  onClick={() => onRouteChange('home')} className='f5 dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign In</p>
	         <p  onClick={() => onRouteChange('register')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Register</p>
	         <p  onClick={() => onRouteChange('admin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >For Admin</p>
	       </div> 
	     </nav>
	   );
     }
     else if(route === 'register'){
       return(
	    <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
	      <div className="flex-grow flex items-center"> 
	       <p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign In</p>
	       <p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Register</p>
	      </div>
	     </nav>
	   );	
     }
     else if(route === 'admin'){
     	return(
	       <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
	       <div className="flex-grow flex items-center"> 
	       <p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Back to User Sign in</p>
	       </div>
	       </nav>
	    );
      }
     else if(route === 'signout'){
     	return(
	       <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
	       <div className="flex-grow flex items-center"> 
	       <p  onClick={() => onRouteChange('admin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
	       </div>
	       </nav>
	    );
      }

       else if(route === 'train_details'){
     	return(
	       <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
	       <div className="flex-grow flex items-center"> 
	       <p  onClick={() => onRouteChange('signout')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Go Back</p>
	       </div>
	       </nav>
	    );
       }
       
	   else if(route === 'train_details_users'){
     	return(
	       <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
	       <div className="flex-grow flex items-center"> 
	       <p  onClick={() => onRouteChange('home2')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Go Back</p>
	       </div>
	       </nav>
	    );
      }

     else{
     	return(
     	   <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
	       <div className="flex-grow flex items-center"> 
	       <p  onClick={() => onRouteChange('signin')} className='f5 grow dib white bg-black mr1 mr4-ns pv2 ph2 br-pill pointer' >Sign Out</p>
	       </div>
	       </nav>	
        );
     } 
}

export default Navigation;