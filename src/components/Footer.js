import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: rgb(114, 102, 153);
  .footer {
    background-color: rgb(114, 102, 153);
  }
`;
const Footer = () => (
  <Section className="section">
    <div className="container">
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <h4 className="title is-4">Download The App</h4>
            <div>
              <a href="https://www.packrs.co/" className="playstore">
                <figure className="image is-32x32">
                  <img
                    src="https://www.packrs.co/images/store-ios.png"
                    alt="aaaa"
                  />
                </figure>
              </a>
              <a href="https://www.packrs.co/" className="appstore">
                <figure className="image is-32x32">
                  <img
                    src="https://www.packrs.co/images/store-android.png"
                    alt="aaaa"
                  />
                </figure>
              </a>
            </div>
          </div>
          <div className="column">
            <h4 className="title is-4">Pivot</h4>
            <ul className="has-text-weight-semibold">
              <li>
                <a href="">about us</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Server stats</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Our Information</h4>
            <ul className="has-text-weight-semibold">
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Reach Us</h4>
            <ul className="has-text-weight-semibold">
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Apply as Business</a>
              </li>
              <li>
                <a href="">Apply as Rider</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p className="has-text-weight-semibold">
              <strong>Bulma</strong> by{' '}
              <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
              licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed .
            </p>
          </div>
          <div className="column has-text-right is-size-3	">
            <span className="icon is-large">
              <i className="fab fa-facebook-f" />
            </span>
            <span className="icon icon is-large">
              <i className="fab fa-instagram" />
            </span>
            <span className="icon is-large">
              <i className="fab fa-twitter" />
            </span>
            <span className="icon is-large">
              <i className="fab fa-linkedin-in" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  </Section>
);

export default Footer;
