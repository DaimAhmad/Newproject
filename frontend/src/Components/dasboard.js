import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CiSearch } from 'react-icons/ci';
import '../Assessts/Dashboard.css';
import Addform from './Form/Addform';
import Veiwform from './Form/Veiwform';
import Update from './Form/updateform';
import profileimage from '../Images/profileimage.jpeg';

const Dashboard = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const [view, setView] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleCalendarChange = (value) => {
    setCalendarValue(value);
  
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const addForm = () => {
    setAdd(true);
    setView(false);
    setUpdate(false);
  };

  const viewForm = () => {
    setView(true);
    setAdd(false);
    setUpdate(false);
  };

  const updateForm = () => {
    setView(false);
    setAdd(false);
    setUpdate(true);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo with-underline">
          MYSTISCENTS
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/perfume-94-245213.png?f=webp&w=256"
            alt="Logo"
            style={{ marginLeft: '10px', width: '30px', height: '30px' }}
          />
        </div>
        <nav className="sidebar-nav">
          <a href="#" onClick={viewForm} className={view ? 'active' : ''}>
            Data Veiw
          </a>
          <a href="#" onClick={addForm} className={add ? 'active' : ''}>
            Add
          </a>
          <a href="#" onClick={updateForm} className={update ? 'active' : ''}>
            Customer
          </a>
          <a href="/notifications" className="nav-item">
            Notifications
          </a>
          <a href="/chat" className="nav-item">
            Chat
          </a>
          <div className="profile-info">
            <img
              src={profileimage} 
              alt="Profile"
              style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '100px', marginTop:"120px" }}
            />
            <div className="profile-name">DAIM AHMAD</div>
            <div className="profile-email">daimahmad58@gmail.com</div>
          </div>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <CiSearch className="search-icon" />
          </div>
          <div className="calendar-container">
            <button onClick={toggleCalendar} style={{ backgroundColor: 'white', color: 'black',marginTop:"10px" }}>
              {calendarValue.toDateString()}
            </button>
            {isCalendarOpen && (
              <Calendar
                onChange={handleCalendarChange}
                value={calendarValue}
                style={{
                  background: 'black',
                  border: '1px solid white',
                }}
              />
            )}
          </div>
        </header>
        <div className="admin-content">
          {add && <Addform />}
          {view && <Veiwform />}
          {update && <Update />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
