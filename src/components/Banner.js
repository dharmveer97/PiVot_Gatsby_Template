import React from 'react';

// eslint-disable-next-line no-undef
const Section = styled.div`
  p {
    color: ${props => props.theme.mainBrandColor} !important;
  }
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
      </div>
    </div>
  </Section>
);

export default Banner;
