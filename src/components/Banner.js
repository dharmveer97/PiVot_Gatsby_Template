import React from 'react';

// eslint-disable-next-line no-undef
import styled from 'styled-components';

const Section = styled.div`
  background: ${props => props.theme.backgroundColor};
`;

const Banner = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="media-content">
            <div className="content">
              <h1 className="title is-4">Initial Problem</h1>
              <p className="">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="media-content">
            <div className="content">
              <h1 className="title is-4">Our Solution</h1>
              <p className="">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="media-content">
            <div className="content">
              <h1 className="title is-4">Amazing Result</h1>
              <p className="">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Banner;
