import './Login.css'
import React ,{Component} from 'react';

class Login extends Component{
    render(){
        return [
            <div className =  "Login__Page">
               <div className ="login__header">
                <h2>Login</h2>
               </div>
               
               <div className = "login__form">
                    <form action="">
                        <div className = "email__box">
                            <label htmlFor="">Email</label>
                            <input type="Email"/>
                        </div>

                        <div className = "password__box">
                            <label htmlFor="">Password</label>
                            <input type="password"/>
                        </div>

                        <button className ="loginBtn" type ="submit">Login</button>
                    </form>
               </div>

            </div>
        ]
    }
}
export default Login