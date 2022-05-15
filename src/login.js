import React from 'react';
import {Link} from "react-router-dom";


function Login(){
    return (
        <div>
       
        <label>
          Usuario: 
          <input type="text" className='form-control' name="usuario" required />
        </label>
       <br/>
        <label>
          Contraseña: 
          <input type="password" className='form-control' name="contraseña" required/>
        </label>
        <br/>
    
        <Link to='/menu'><button className='btn btn-primary' type='submit'>INGRESAR</button></Link>
        
        </div>
    )
}


export default Login;