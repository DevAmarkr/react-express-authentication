import './Auth.css'
import React,{Component} from 'react';
import Register from '../../Component/Register/Register';
import Login from '../../Component/Login/Login';
import axios from 'axios'

class Authentication_page extends Component{

  onRegisterd = async (data)=>{
    let response =  await axios.post('http://localhost:3333/user/registration',data);
    if(response.data.message === "yess...!! successfully registerd"&& response.data.success===true){
      let saveData =  localStorage.setItem('token',response.data.token)
      alert('successfull registerd ')
    }else{
      alert('something is happend wrong')
    }
    }

    render(){
        return[
           <div className = "Auth__page">
             <Login/>
             <Register onRegisterd = {this.onRegisterd} />
           </div>
        ]
    }
}
export default Authentication_page