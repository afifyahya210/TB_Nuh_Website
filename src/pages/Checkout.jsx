import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Checkout = () => {

    const totalQty = useSelector(state=>state.cart.totalQuantity)
    const totalAmount = useSelector(state=>state.cart.totalAmount)


    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout' />
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <h6 className='mb-4 fw-bold'>Informasi Pesanan</h6>
                            <Form className='billing__form'>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Nama Pemesan' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="number" placeholder='Nomor Telepon' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Alamat lengkap' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Kota/Kabupaten' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Kode Pos' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Negara' />
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col lg='4'>
                            <div className='checkout__cart'>
                                <h6>Total Pesanan : <span>{totalQty} barang </span></h6>
                                <h6>Subtotal: <span>Rp {totalAmount}</span></h6>
                                <h6> 
                                    <span>
                                        Ongkos Kirim : <br />
                                        Gratis Ongkir
                                    </span>
                                    <span>Rp 0</span> 
                                </h6>

                                <h4>
                                    Total : <span>Rp {totalAmount}</span>
                                </h4>
                                <button className='buy__btn auth__btn w-100'><Link to='/InvoicePage'>Buat Pesanan</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout
