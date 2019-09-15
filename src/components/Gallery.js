import React from 'react';

const Gallery = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div
          className="column is-half
            is-offset-one-quarter">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title has-text-centered">
                  A lightbox enabled gallery
                </h1>
                <p className="has-text-centered">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
