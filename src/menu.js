import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './styles.css';
import './App.css';

function Menu(){
    return (
     <div className='d-flex topleft'>
        <div id='sidebar-container' className='fondo'>
            <div className='logo'>
                <img src={logo} className="App-logo " alt="logo" />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/management/members"
          onSelect={({itemId}) => {
            // maybe push to the route
          }}
          items={[
            {
              title: 'Inicio',
              itemId: '/',
              // you can use your own custom Icon component as well
              // icon is optional
              elemBefore: () => <icon name="inbox" />,
            },
            {
              title: 'Carpeta 1',
              itemId: '/doc',
              elemBefore: () => <icon name="users" />,
              subNav: [
                {
                  title: 'documento.pdf',
                  itemId: '/management/projects',
                },
                {
                  title: 'documento2.pdf',
                  itemId: '/management/members',
                },
              ],
            },
            {
              title: 'Carpeta 2',
              itemId: '/another',
              subNav: [
                {
                  title: 'documento3.pdf',
                  itemId: '/management/teams',
                },
              ],
            },
          ]}
        />
        </div>
     </div>
    );
}


export default Menu;