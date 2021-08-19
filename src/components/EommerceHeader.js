import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FaLuggageCart } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';
import { Link, useHistory } from 'react-router-dom';

function EommerceHeader() {
  const history = useHistory();
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <Link className='navbar-brand' to='/'>
              <ImHome className='d-inline-block align-top ms-3 fs-3 me-3' />
              Ecommerce
            </Link>
          </Navbar.Brand>
          <FaLuggageCart
            className='product-cart'
            onClick={() => {
              history.push('/cart');
            }}
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default EommerceHeader;
