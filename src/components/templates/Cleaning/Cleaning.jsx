import React from 'react';
import './Cleaning.css'

//Components
import Content from '../../Content/Content'
import Circle from '../../utils/Circle/Circle'
import Label from '../../utils/Label/Label'
import Select from '../../utils/Select/Select'
import Button from '../../utils/Button/Button'

//Icons
import MenuIcon from '../../../static/img/menu-orangeWeb.svg'
import TrashIcon from '../../../static/img/trash.svg'
import FlagIcon from '../../../static/img/flag.svg'
import HomeworkIcon from '../../../static/img/home-work.svg'

function Cleaning() {
  return (
    <Content>
      <aside className='cleaning-box'>
        <div className="cleaning-container">
          <h3><img src={MenuIcon} alt="menu-icon" />Administração da Limpeza</h3>
          <div className="cleaning-content">
            <div className="cleaning-content-action">
              <h3><img src={TrashIcon} alt='trash-icon' />Escala Semanal de Limpeza</h3>
              <div className="row">
                <Circle min={true} type='follyRed' />
                <Label title='Seg' />
                <Select color='pictonBlue'>
                  <option>Reposição</option>
                  <option>Fábio Oliveira</option>
                  <option>Filipe</option>
                  <option>Jean Santos</option>
                  <option>Herivelton Soares</option>
                  <option>Thiago Augusto</option>
                  <option>Wagner Zuffi</option>
                </Select>
              </div>
              <div className="row">
                <Circle min={true} type='follyRed' />
                <Label title='Ter' />
                <Select color='pictonBlue'>
                  <option>Reposição</option>
                  <option>Fábio Oliveira</option>
                  <option>Filipe</option>
                  <option>Jean Santos</option>
                  <option>Herivelton Soares</option>
                  <option>Thiago Augusto</option>
                  <option>Wagner Zuffi</option>
                </Select>
              </div>
              <div className="row">
                <Circle min={true} type='pictonBlue' />
                <Label title='Qua' />
                <Select color='pictonBlue'>
                  <option>Reposição</option>
                  <option>Fábio Oliveira</option>
                  <option>Filipe</option>
                  <option>Jean Santos</option>
                  <option>Herivelton Soares</option>
                  <option>Thiago Augusto</option>
                  <option>Wagner Zuffi</option>
                </Select>
              </div>
              <div className="row">
                <Circle min={true} type='follyRed' />
                <Label title='Qui' />
                <Select color='pictonBlue'>
                  <option>Reposição</option>
                  <option>Fábio Oliveira</option>
                  <option>Filipe</option>
                  <option>Jean Santos</option>
                  <option>Herivelton Soares</option>
                  <option>Thiago Augusto</option>
                  <option>Wagner Zuffi</option>
                </Select>
              </div>
              <div className="row">
                <Circle min={true} type='follyRed' />
                <Label title='Sex' />
                <Select color='pictonBlue'>
                  <option>Reposição</option>
                  <option>Fábio Oliveira</option>
                  <option>Filipe</option>
                  <option>Jean Santos</option>
                  <option>Herivelton Soares</option>
                  <option>Thiago Augusto</option>
                  <option>Wagner Zuffi</option>
                </Select>
              </div>
              <div className="row">
                <Circle min={true} type='follyRed' />
                <Label title='Sab' />
                <Select color='pictonBlue'>
                  <option>Reposição</option>
                  <option>Fábio Oliveira</option>
                  <option>Filipe</option>
                  <option>Jean Santos</option>
                  <option>Herivelton Soares</option>
                  <option>Thiago Augusto</option>
                  <option>Wagner Zuffi</option>
                </Select>
              </div>
              <div className="row">
                <Circle min={true} type='follyRed' />
                <Label title='Dom' />
                <Select color='pictonBlue'>
                  <option>Reposição</option>
                  <option>Fábio Oliveira</option>
                  <option>Filipe</option>
                  <option>Jean Santos</option>
                  <option>Herivelton Soares</option>
                  <option>Thiago Augusto</option>
                  <option>Wagner Zuffi</option>
                </Select>
              </div>
              <p>Personalize a Escala Semanal de Limpeza conforme suas necessidades e confirme a alteração</p>
              <div className="row-btn">
                <Button color='mediumseaGreen' type='submit' title='Confirmar' />
                <Button color='orangeWeb' type='reset' title='Limpar' />
              </div>
            </div>
            <div className="cleaning-content-status">
              <h2><img src={FlagIcon} alt='flag-icon' />Status do dia</h2>
              <h3><img src={HomeworkIcon} alt='homework-icon' />Hoje é o dia de limpeza do(a) Fábio Oliveira</h3>
              <p>Assim que você realizar a tarefa, confirme ela aqui: </p>
              <div className="row">
                <Button color='pictonBlue' type='submit' title='Feita' />
                <Button color='orangeWeb' type='reset' title='Não Feita' />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </Content>
  );
}

export default Cleaning
