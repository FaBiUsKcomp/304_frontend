import React from 'react';
import './Money.css'

import Menu from '../../../static/img/menu-pictonBlue.svg'

import Content from '../../Content/Content'

function Money() {
  return (
    <Content>
      <aside className='money-box'>
        <div className='money-box-container'>
          <h3><img src={Menu} alt="menu-icon" />Administração da Caixinha</h3>
          <div className='money-content'>
            <div className='money-content-action'>
              <div className='money-content-action-box'>
                
              </div>
            </div>
            <div className='money-content-info'>
              
            </div>
          </div>
        </div>
      </aside>
    </Content>
  );
}

export default Money
