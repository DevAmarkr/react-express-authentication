import './Register.css'
import React,{Component} from 'react';
import axios from 'axios'

class Register extends Component{
   constructor(props){
       super(props)
       this.state = {
           userName:'',
           email:'',
           password:''
       }
   }
   onUsernameChange = (e)=>{
       this.setState({userName:e.target.value})
   }
   onEmailChange = (e)=>{
    this.setState({email:e.target.value})
  }
   onPasswordChange = (e)=>{
    this.setState({password:e.target.value})
  }

  onPostData = (e)=>{
      e.preventDefault()
      let data = {
          userName:this.state.userName,
          email:this.state.email,
          password:this.state.password

      }
   this.props.onRegisterd(data)
  }



 render(){
     return[
         <div className =  "Register__page">
          <div className ="Register__header">
              <h2>Create An Account</h2>
          </div>

          <div className ="Register__form box">
              <form action="" onSubmit = {this.onPostData}>
                <div className = "username__box"> 
                     <label htmlFor="">Username</label>
                     <input value = {this.state.userName} onChange = {this.onUsernameChange} type="text"/>
                </div>

                <div className = "email__box box">
                     <label htmlFor="">Email</label>
                     <input value = {this.state.email} onChange = {this.onEmailChange} type="Email"/>
                </div>

                <div className = "password__box box">
                     <label htmlFor="">Password</label>
                     <input value ={this.state.password} onChange = {this.onPasswordChange} type="password"/>
                </div>

                <button className ="createBtn" type ="submit">Create</button>
              </form>
          </div>
         </div>
     ]
 }
}
export default Register