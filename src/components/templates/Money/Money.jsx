import React from 'react';
import './Money.css'

import Menu from '../../../static/img/menu-pictonBlue.svg'
import Content from '../../Content/Content'
import FindPageIcon from '../../../static/img/findpage.svg'
import MecanicIcon from '../../../static/img/mecanic.svg'
import MonetizationIcon from '../../../static/img/monetization.svg'
import Label from '../../utils/Label/Label'
import Input from '../../utils/Input/Input'
import Select from '../../utils/Select/Select'
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
                  <Label htfor='mouthssearch' title='Mês' color='pictonBlue' />
                  <Select id='mouthssearch' color='pictonBlue'>
                    <option value="january">Janeiro</option>
                    <option value="february">Fevereiro</option>
                    <option value="march">Março</option>
                    <option value="april">Abril</option>
                    <option value="may">Maio</option>
                    <option value="june">Junho</option>
                    <option value="july">Julho</option>
                    <option value="august">Agosto</option>
                    <option value="september">Setembro</option>
                    <option value="october">Outubro</option>
                    <option value="november">Novembro</option>
                    <option value="december">Dezembro</option>
                  </Select>
                  <Label htfor='yearssearch' title='Ano' color='pictonBlue' />
                  <Select id='yearssearch' color='pictonBlue'>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </Select>
                  <Button type='button' color='pictonBlue' title='Consultar' />
                </div>
                <p><img src={MecanicIcon} alt="findpageicon" /> Cadastro de Pagamentos</p>
                <div className='row'>
                  <Label htfor='mouthscreate' title='Mês' color='pictonBlue' />
                  <Select id='mouthscreate' color='mediumseaGreen'>
                  <option value="january">Janeiro</option>
                    <option value="february">Fevereiro</option>
                    <option value="march">Março</option>
                    <option value="april">Abril</option>
                    <option value="may">Maio</option>
                    <option value="june">Junho</option>
                    <option value="july">Julho</option>
                    <option value="august">Agosto</option>
                    <option value="september">Setembro</option>
                    <option value="october">Outubro</option>
                    <option value="november">Novembro</option>
                    <option value="december">Dezembro</option>
                  </Select>
                  <Label htfor='yearscreate' title='Ano' color='pictonBlue' />
                  <Select id='yearscreate' color='mediumseaGreen'>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </Select>
                  <Button type='button' color='mediumseaGreen' title='Cadastrar' />
                </div>
                <div className='row'>
                <Label htfor='valuecreate' title='Valor' color='pictonBlue' />
                  <Select id='valuecreate' color='mediumseaGreen' half={true}>
                    <option value={10}>R$10.00</option>
                    <option value={15}>R$15.00</option>
                    <option value={20}>R$20.00</option>
                    <option value={25}>R$25.00</option>
                    <option value={30}>R$30.00</option>
                    <option value={35}>R$35.00</option>
                  </Select>
                  <Button type='button' color='orangeWeb' title='Cancelar' />
                </div>
                <p><img src={MonetizationIcon} alt="findpageicon" /> Dinheiro</p>
                <div className='row-extends'>
                  <div className='money-content-action-box-value'>
                    <Label title='Valor em Caixa' color='pictonBlue' />
                    <h4>R$ 45,30</h4>
                  </div>
                  <div className='money-content-action-box-remove'>
                    <Label title='Gastar Dinheiro' color='follyRed' />
                    <div className='row'>
                      <Label title='Justificativa' color='pictonBlue' />
                      <Input type='text' color='follyRed' placeholder='Motivo...' />
                      <Button type='button' color='follyRed' title='Remover' />
                    </div>
                    <div className='row'>
                      <Label title='Valor' color='pictonBlue' />
                      <Input halfextends={true} type='text' color='follyRed' placeholder='12.00' />
                    </div>
                  </div>
                </div>
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
