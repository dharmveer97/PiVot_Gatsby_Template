import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: url(https://colorlib.com/etc/bizpro/images/home/1.jpg);
  background-size: cover;
  background-attachment: fixed;
  .section {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const Design = () => (
  <Wrapper>
    <section className="section">
      <div className="opacity">
        <div className="columns">
          <div className="column">
            <section className="hero is-medium">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title has-text-centered is-uppercase">
                    We Create Creative & Best Unique Design
                  </h1>
                  <div className="has-text-centered">
                    <a className="button is-danger is-medium is-outlined">
                      Let's Work Together
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);

export default Design;
