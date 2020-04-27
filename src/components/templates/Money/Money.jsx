import React from 'react';
import './Money.css'

import Menu from '../../../static/img/menu-pictonBlue.svg'
import Content from '../../Content/Content'
import FindPageIcon from '../../../static/img/findpage.svg'
import MecanicIcon from '../../../static/img/mecanic.svg'
import MonetizationIcon from '../../../static/img/monetization.svg'
import Input from '../../utils/Input/Input'
import Button from '../../utils/Button/Button'

function Money() {
  return (
    <Content>
      <aside className='money-box'>
        <div className='money-box-container'>
          <h3><img src={Menu} alt="menu-icon" />Administração da Caixinha</h3>
          <div className='money-content'>
            <div className='money-content-action'>
              <div className='money-content-action-box'>
                <p><img src={FindPageIcon} alt="findpageicon" /> Consulta de Pagamentos</p>
                <div className='row'>
                  <label>Mês</label>
                  <Input type='text' color='pictonBlue' />
                  <label>Ano</label>
                  <Input type='text' color='pictonBlue' />
                  <Button type='button' color='pictonBlue' title='Consultar' />
                </div>
                <p><img src={MecanicIcon} alt="findpageicon" /> Cadastro de Pagamentos</p>
                <div className='row'>
                  <label>Mês</label>
                  <Input type='text' color='mediumseaGreen' />
                  <label>Valor</label>
                  <Input type='text' color='mediumseaGreen' />
                  <Button type='button' color='mediumseaGreen' title='Cadastrar' />
                </div>
                <div className='row'>
                  <label>Ano</label>
                  <Input type='text' color='mediumseaGreen' half={true} />
                  <Button type='button' color='orangeWeb' title='Cancelar' />
                </div>
                <p><img src={MonetizationIcon} alt="findpageicon" /> Dinheiro</p>
                
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
