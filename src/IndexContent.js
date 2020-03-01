import React, { Component } from 'react'
import {Redirect ,Link,BrowserRouter} from 'react-router-dom';

import axios from 'axios';

class IndexContent extends Component {

     constructor(props) {
         super(props)
        this.onChangeUseruserName = this.onChangeUseruserName.bind(this);
        this.onChangeUseruserEmail = this.onChangeUseruserEmail.bind(this);
        this.onChangeUseruserPassword = this.onChangeUseruserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       

         this.state = {
             sign: false,
             userName: '',
            userEmail: '',
            userPassword:'',
            isSignedUp: false 
              
         }
     }
     onChangeUseruserName(e) {
        this.setState({ userName: e.target.value })
    }

    onChangeUseruserEmail(e) {
        this.setState({ userEmail: e.target.value })
    }

    onChangeUseruserPassword(e) {
        this.setState({ userPassword: e.target.value })
         
    }
    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            userName: this.state.userName,
            userEmail: this.state.userEmail,
            userPassword: this.state.userPassword,
                        
        };


        axios.post('http://localhost:3400/users/signUp', userObject)

            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
            if (userObject.userName  !== ' '&& userObject.userEmail !== ''&& userObject.userPassword !== ''){
                this.setState({ isSignedUp: true });}
                else{
                this.setState({ isSignedUp: false });
            }
        this.setState({ userName: '', userEmail: '', userPassword:'' });
       

        
        
    }
      render() {
          const {  sign } = this.state;
            if (this.state.isSignedUp) {
              return <Redirect to = {{ pathname: "/App2" }} />;
            }
    return (<section id="home" class="main">
    <div class="overlay"></div>
   <div class="container">
       <div class="row">

              <div class="wow fadeInUp col-md-6 col-sm-5 col-xs-10 col-xs-offset-1 col-sm-offset-0" >
                    <img src="https://images-na.ssl-images-amazon.com/images/I/31dNhl27s%2BL._SX311_BO1,204,203,200_.jpg"   
                     class="img-responsive" alt="Home"
                     />
              </div>

              <div class="col-md-6 col-sm-7 col-xs-12"  >
                   <div class="home-thumb">
                   <h2>Get Started and Create Your Account</h2>
                   <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter UserName</label>
                        <input type="text" value={this.state.userName} onChange={this.onChangeUseruserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Email</label>
                        <input type="text" value={this.state.userEmail} onChange={this.onChangeUseruserEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Password</label>
                        <input type="password" value={this.state.userPassword} onChange={this.onChangeUseruserPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                    
                    <button className="wow fadeInUp section-btn btn btn-success smoothScroll" id="signup" value="Create User">SignUp</button>
                    
                    </div>
                </form>
                </div>
            </div>
            
              </div>
               </div>
       </div>
     </section>
     
);

}
}



export default IndexContent

    
