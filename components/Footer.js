import React from 'react';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">
              Our website offers the convenience of having your desired
              products delivered.
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Selling</Footer.Link>
            <Footer.Link href="#">Deliverying</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">Ethiopia</Footer.Link>
            <Footer.Link href="#">Addis Ababa</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social Links</Footer.Title>
            <Footer.Link href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookF} className="fab" />
              _Facebook
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} className="fab" />
              _Instagram
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
        @Copyright 2023 Delivery Website
      </Footer.Wrapper>
    </Footer>
  );
}
