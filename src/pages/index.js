import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Gallerydata from '../components/Gallerydata';
import Design from '../components/Design';
import Layout from '../components/Layout';
import Team from '../components/Team';
import Cardcontent from '../components/Cardcontent';
import Footer from '../components/Footer';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <section className="section">
          <Container className="container">
            <div className="columns">
              <div className="column">
                <section className="hero is-medium">
                  <div className="hero-body">
                    <div className="container">
                      <h1 className="subtitle is-uppercase has-text-weight-semibold">
                        branding & identity
                      </h1>
                      <h2 className="title is-size-2">Rebranding Project</h2>
                      <p className="has-text-weight-semibold">
                        Here is a short description of the
                      </p>
                      <p className="has-text-weight-semibold">
                        project we completed.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Container>
        </section>
        <Banner title="cards" description="Welcome to GatsbyJs v1" />
        <Gallery title="Our-Gallery" description="Welcome to GatsbyJs v1" />
        <Gallerydata
          title="Our-Gallery-data"
          description="Welcome to GatsbyJs v1"
        />
        <Design title="Designs" description="Welcome to GatsbyJs v1" />
        <Team title="our-team" description="Welcome to GatsbyJs v1" />
        <Cardcontent title="cardcontent" description="Welcome to GatsbyJs v1" />
        <Footer title="bottom" description="Welcome to GatsbyJs v1" />
      </Layout>
    );
  }
}
