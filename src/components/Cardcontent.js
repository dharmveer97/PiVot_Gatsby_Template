import React from 'react';
import Cards from './Cards';

const Cardcontent = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <Cards
            title="Gonzalez Gina"
            img="https://colorlib.com/etc/bizpro/images/team/1.jpg"
            subtitle="Web Developer"
          />
        </div>
        <div className="column">
          <Cards
            title="Holly Vincenzini"
            img="https://colorlib.com/etc/bizpro/images/team/2.jpg"
            subtitle="Media Partner"
          />
        </div>
        <div className="column">
          <Cards
            title="Ramirez Minita"
            img="https://colorlib.com/etc/bizpro/images/team/3.jpg"
            subtitle="Graphic Design"
          />
        </div>
      </div>
    </div>
  </section>
);
export default Cardcontent;
