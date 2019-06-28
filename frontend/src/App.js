import './index.css'
import React,{Component} from 'react';
import Authentication_page from './Pages/Auth/Authentication_page'

class App extends Component {

   


    render(){
        return[
            <div>
               <Authentication_page  />
            </div>
        ]
    }
}
export default App