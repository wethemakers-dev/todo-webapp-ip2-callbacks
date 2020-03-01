import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import {Redirect ,Link} from 'react-router-dom';
import axios from 'axios';

//import DataTable from './data-table';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = { usersCollection: [] };

        this.state = {
           
            login: false,
            isLogin: false 

        }
    }
  /* 
    componentDidMount() {
        axios.get('http://localhost:3400/users')
            .then(res => {
             
                    this.setState({ usersCollection: res.data });
                 
            })
            .catch(function (error) {
                console.log(error);
            })
    }

     if (userObject.userName  !== ' '&& userObject.userEmail !== ''&& userObject.userPassword !== ''){
                this.setState({ isLogin: true });}
                else{
                this.setState({ isLogin: false });
            }
    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }
*/
    
    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };


    render() {
        const { login } = this.state;
        if (this.state.isLogin) {
            return <Redirect to = {{ pathname: "/App2" }} />;
          }
        return (

            <>
                <header className="header header-animated opaque" style={{ "display": 'block', "paddingTop": "5px", "paddingBottom": "5px" }}>
                    <div className="container">
                        <nav className="navbar navbar-default" role="navigation">
                            
                            <div className="navbar-collapse collapse in" id="navbarMain" aria-expanded="true" style={{ top: "65px" }}>
                            <ul className="nav navbar-nav navbar-left">
                                <li><h1> 
                                    <span>To Do</span> List
                                     </h1></li>
                                </ul>

                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                       
                                        <button className="btn btn-primary-outline" id="login" onClick={this.onOpenModalLogin}>  
                                            Login 
                                           
                                            </button>
                                        
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>

                </header>
                {/* login */}

                <Modal open={login} onClose={this.onCloseModalclose} >
                
                    <div className="modal-body">
                        <h2>Login</h2>
                        <form className="contact-form form-validate4" novalidate="novalidate" action="/todolist">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <Link to='./App2'>
                            <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" /></Link>
                            {/* /*{this.dataTable()}*/ }
                        </form>
                    </div>
                </Modal>
            </>

        );
    }
}



export default Header