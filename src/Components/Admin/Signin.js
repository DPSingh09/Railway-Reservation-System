import React from 'react';

class Signin extends React.Component {
   
   constructor(props){
   	super(props);
   	this.state = {
   		signinEmail: '',
   		signinPass: ''
   	}
   }

   onEmailChange = (event) => {
   	 this.setState({signinEmail: event.target.value});
   }

   onPassChange = (event) => {
   	 this.setState({signinPass: event.target.value});
   }

   onSubmitSignIn = () => {
   	  //this.props.onRouteChange('signout');
   	  console.log(this.state.signinEmail);
   	  console.log(this.state.signinPass);
   	fetch('http://localhost:3000/signinadmin', {
   		method: 'post',
   		headers: {'Content-Type': 'application/json'},
   		body: JSON.stringify({
   			email: this.state.signinEmail,
   			password: this.state.signinPass
   		})
   	})
      .then(response =>response.json())
      .then(data => {
      	if(data === 'success')
      		this.props.onRouteChange('signout');
      	else
      		alert('Wrong Credentials');
      }) 
                
   	} 
    
    render(){ 
	 return(
	  <article className="br3 ba shadow-2 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center bg">	
	    <main className="pa4 black-80">
	      <div className="measure">
	       <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	         <legend className="f2 fw6 ph0 mh0">Sign In</legend>
	         <div className="mt3">
	          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
	          <input 
	            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
	            type="email" 
	            name="email-address" 
	            id="email-address"
	            onChange={this.onEmailChange}
	            />
	         </div>
	         <div className="mv3">
	          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
	          <input 
	            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	            type="password" 
	            name="password"  
	            id="password"
	            onChange={this.onPassChange}
	            />
	         </div>
	        </fieldset>
	      <div className="">
	       <input 
	         onClick = {this.onSubmitSignIn}
	        // onClick = {() => onRouteChange('signout')}
	         className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
	         type="submit" 
	         value="Sign in" 
	         />
	      </div>
	    </div>
	  </main>
	</article>  
    );
	}
  }

export default Signin;