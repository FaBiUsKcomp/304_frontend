import React from 'react';
import './Dispensation.css'

//Components
import Content from '../../Content/Content'
import Label from '../../utils/Label/Label'
import Input from '../../utils/Input/Input'
import Button from '../../utils/Button/Button'

//Icons
import MenuIcon from '../../../static/img/menu-follyRed.svg'
import AddIcon from '../../../static/img/add.svg'
import RemoveIcon from '../../../static/img/remove.svg'
import StoreIcon from '../../../static/img/store.svg'
import StoreCarAddIcon from '../../../static/img/store-car-add.svg'
import StoreCarFoundIcon from '../../../static/img/store-car-found.svg'

function Dispensation() {
  return (
    <Content>
      <aside className='dispensation-box'>
        <div className='dispensation-container'>
          <h3><img src={MenuIcon} alt="menu-icon" />Administração da Dispensa</h3>
          <div className='dispensation-content'>
            <p><img src={AddIcon} alt='add-icon' />Adicionar um Novo Produto</p>
            <div className="row">
              <Label color='pictonBlue' title='Nome do Produto' />
              <Input color='pictonBlue' placeholder='Produto...'/>
              <Button type='submit' title='Cadastrar' color='mediumseaGreen' />
              <Button type='button' title='Limpar' color='orangeWeb' />
            </div>
            <div className="dispensation-content-products">
              <div className="dispensation-content-products-all">
                <p><img src={StoreIcon} alt='store-icon' />Produtos da Dispensa</p>
                <div className="dispensation-content-products-all-itens">
                  
                </div>
              </div>
              <div className="dispensation-content-products-all">
                <p><img src={StoreCarFoundIcon} alt='store-car-found-icon' />Produtos em Falta</p>
                <div className="dispensation-content-products-all-missing">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </Content>
  );
}

export default Dispensation
