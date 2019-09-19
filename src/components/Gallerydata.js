import React from 'react';

const GalleryData = () => (
  <section className="section">
    <div className="container">
      <div className="columns is-multiline is-mobile">
        <div className="column is-two-thirds">
          <code>
            <figure className="image is-2by1">
              <img src="/images/igallery4.jpg" alt="gallery image11" />
            </figure>
          </code>
        </div>
        <div className="column">
          <code>
            <figure className="image is-1by1">
              <img src="/images/igallery5.jpg" alt="gallery image1" />
            </figure>
          </code>
        </div>
        <div className="column is-half">
          <code>
            <figure className="image is-square">
              <img src="/images/igallery2.jpg" alt="gallery image13" />
            </figure>
          </code>
        </div>
        <div className="column is-half">
          <code>
            <figure className="image is-square">
              <img src="/images/igallery3.jpg" alt="gallery image14" />
            </figure>
          </code>
        </div>
      </div>
    </div>
  </section>
);

export default GalleryData;
