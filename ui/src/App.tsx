import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Home } from './pages/home/Home.component';
import 'suneditor/dist/css/suneditor.min.css';
import {useStoreActions} from '../src/hooks/easyPeasy'
import jwt_decode from 'jwt-decode'

function App() {
  const {setUserData} = useStoreActions(a=>a.auth)
  useEffect(()=>{
    let token = localStorage.getItem('rwd_t')
    if(token){
      const decoded:any = jwt_decode(token)
      setUserData(decoded.user)
    }
  },[])
  return (
    
    <div className="App">
       <Home/>
    </div>
  );
}

export default App;
