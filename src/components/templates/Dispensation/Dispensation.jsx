import React, { Component } from 'react';
import './Dispensation.css'

//Components
import Content from '../../Content/Content'
import Label from '../../utils/Label/Label'
import Input from '../../utils/Input/Input'
import Button from '../../utils/Button/Button'
import Loader from '../../utils/Loader/Loader'

//Icons
import MenuIcon from '../../../static/img/menu-follyRed.svg'
import AddIcon from '../../../static/img/add.svg'
import RemoveIcon from '../../../static/img/remove.svg'
import StoreIcon from '../../../static/img/store.svg'
import StoreCarAddIcon from '../../../static/img/store-car-add.svg'
import StoreCarFoundIcon from '../../../static/img/store-car-found.svg'

//Utils
import Axios from '../../../config/api'

const defaultState = {
  newProduct: '',
  productsOfDispensation: [],
  missingProductsOfDispensation: [],
  isLoading: true
}

export default class Dispensation extends Component {

  constructor(props) {
    super(props)
    this.handleNewProduct = this.handleNewProduct.bind(this)
  }

  state = { ...defaultState }

  async componentDidMount() {
    await this.getAllProductsOfDispensation()
    await this.getAllMissingProductsOfDispensation()
    this.setState({ isLoading: false })
  }

  handleNewProduct = async (e) => {
    e.preventDefault()

    if(!this.state.newProduct) alert('Nome inválido!')

    const addProduct = { name: this.state.newProduct }

    await Axios.post('/dispensation', addProduct)
      .then(product => this.state.productsOfDispensation.push(product.data))
      .catch(error => alert(error))

    this.setState({ newProduct: '' })
  }

  getAllProductsOfDispensation = async () => {
    await Axios.get('/dispensation')
      .then(products => this.setState({ productsOfDispensation: products.data }))
      .catch(error => alert(error))
  }

  getAllMissingProductsOfDispensation = async () => {
    await Axios.get('/dispensation/missing')
      .then(products => this.setState({ missingProductsOfDispensation: products.data }))
      .catch(error => alert(error))
  }

  deleteProductOfDispensation = async (e) => {
    e.preventDefault()
    await Axios.delete('/dispensation', { _id: e.target.id })
      .then(productDelete => {
        const productsTemp = this.state.productsOfDispensation
          .filter(product => product._id !== productDelete.data._id)
        const missingProductsTemp = this.state.missingProductsOfDispensation
          .filter(product => product._id !== productDelete.data._id)
          
        this.setState({ productsOfDispensation: productsTemp, missingProductsOfDispensation: missingProductsTemp })
      })
      .catch(error => alert(error))
  }

  render() {
    return (
      <Content>
        {
          this.state.isLoading ? <Loader color='follyRed' /> :
            <aside className='dispensation-box'>
              <div className='dispensation-container'>
                <h3><img src={MenuIcon} alt="menu-icon" />Administração da Dispensa</h3>
                <div className='dispensation-content'>
                  <p><img src={AddIcon} alt='add-icon' />Adicionar um Novo Produto</p>
                  <div className="row">
                    <Label color='pictonBlue' title='Nome do Produto' />
                    <Input color='pictonBlue' placeholder='Produto...'
                      onChange={e => this.setState({ newProduct: e.target.value })}
                      value={this.state.newProduct} />
                    <Button type='button' title='Cadastrar' color='mediumseaGreen' onClick={this.handleNewProduct} />
                    <Button type='button' title='Limpar' color='orangeWeb' onClick={e => this.setState({ newProduct: '' })} />
                  </div>
                  <div className="dispensation-content-products">
                    <div className="dispensation-content-products-all">
                      <p><img src={StoreIcon} alt='store-icon' />Produtos da Dispensa</p>
                      <div className="dispensation-content-products-all-itens">
                        <div className='dispensation-content-products-all-itens-list'>
                          {
                            this.state.productsOfDispensation.map(product => {
                              return <span id={product._id} key={product.name}>
                                {product.name}
                                <div className='products-list-box-img'>
                                  <img id={product._id} src={StoreCarAddIcon} alt='Add-icon' 
                                    title='Adicionar Produto'
                                    onClick={this.deleteProductOfDispensation} 
                                  />
                                  <img id={product._id} src={RemoveIcon} alt='Remove-icon' title='Remover Produto' 
                                    onClick={this.deleteProductOfDispensation} 
                                  />
                                </div>
                              </span>
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div className="dispensation-content-products-all">
                      <p><img src={StoreCarFoundIcon} alt='store-car-found-icon' />Produtos em Falta</p>
                      <div className="dispensation-content-products-all-missing">
                        <div className='dispensation-content-products-all-missing-list'>
                          {
                            this.state.missingProductsOfDispensation.map(product => {
                              return <span key={product.name}>
                                {product.name}
                                <div className='products-list-box-img'>
                                  <img src={RemoveIcon} alt='Remove-icon' title='Remover Produto'
                                    
                                  />
                                </div>
                              </span>
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
        }
      </Content>
    );
  }
}
