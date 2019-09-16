import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .card-content {
    background: ${props => props.theme.backgroundColor};
  }
`;

const Cards = props => (
  <Wrapper>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.img} alt="Placeholder image1" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h1 className="title is-4 has-text-centered">{props.title}</h1>
          <p className="has-text-centered">{props.subtitle}</p>
        </div>
      </div>
    </div>
  </Wrapper>
);
export default Cards;
