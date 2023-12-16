import React, { useEffect, useRef, useState } from 'react';
import '../Assessts/dropdown.css'; 
import img1 from '../Images/Admin.png.jpg';
import Addform from './Form/Addform';
import Veiwform from './Form/Veiwform';
 import Update from './Form/updateform';


function Admin() {
  const [add, setAdd] = useState(false);
  const [view, setView] = useState(false); 
  const [update,setupdate] = useState(false);

  const addForm = () => {
    setAdd(true);
    setView(false);
    setupdate(false);
  };

  const viewForm = () => {
    setView(true);
    setAdd(false);
    setupdate(false);
  };
   const Updateform =() =>
     {
      setView(false);
     setAdd(false);
     setupdate(true);
     }

 


  return (
    <div className="container-fluid">
      <div className="row" style={{ width: '100%', height: '20vh', backgroundColor: 'black' }}>
        <img src={img1} style={{ width: '100%', height: '20vh', padding: '0px', marginLeft: '20px' }} alt="Admin" />
      </div>
      <div className="row" style={{ width: '100%', height: '80vh' }}>
        <div className="col-md-3" style={{ height: '100%' }}>
          <div className="wrapper">
            <div className="sidebar">
              <h2>Dashboard</h2>
              <ul>
                <li><a href="#" onClick={viewForm} className={view ? 'active' : ''}>Data Veiw</a></li>
                <li><a href="#" onClick={addForm} className={add ? 'active' : ''}>Add</a></li>
                <li><a href="#" onClick={Updateform} className={update ? 'active' : ''}  >Customer</a></li>
               
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9" style={{ height: '100%' }}>
          {add && <Addform />}
          {view && <Veiwform />}
           {update&&<Update />} 
        </div>
      </div>
    </div>
  );
}

export default Admin;
