import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import EmotionsHero from '../Elements/emotionsHero';
import Quote from '../Elements/quote';
import Footer from '../Elements/footerOutside'


export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <>
    <EmotionsHero/>

    <div>
      <Nav tabs>
        <NavItem>
          <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
            Todas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            Feliz
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
            Normal
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
            Triste
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
            Enojado
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '6' ? 'active' : ''} onClick={() => setActiveTab('6')}>
            Ansioso
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '7' ? 'active' : ''} onClick={() => setActiveTab('7')}>
            estresado
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Code</th>
          <th>Company</th>
          <th>Price</th>
          <th>Change</th>
          <th>Change %</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </TabPane>
        <TabPane tabId="2">
        <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        
        <tr>
          <td>AAX</td>
          <td>ADELAIDE</td>
          <td>$3.22</td>
          <td>+0.01</td>
          <td>+1.36%</td>
        </tr>
        </tbody>
    </table>
        </TabPane>
        <TabPane tabId="3"></TabPane>
        <TabPane tabId="4"></TabPane>
        <TabPane tabId="5"></TabPane>
        <TabPane tabId="6"></TabPane>
        <TabPane tabId="7"></TabPane>
      </TabContent>
    </div>
    <div className='row'>
        <Quote/>
    </div>
    <Footer/>
    </>
  );
}