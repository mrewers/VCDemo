import React from 'react';

import portrait from '../assets/portrait.jpg';

class Body extends React.Component {

  render() {
    return(
      <div className="body_container">
        <section className="section grid_section">
          <h2>Our Partners</h2>
          <div className="grid_wrapper">
            <div className="grid_item">
              <img className="grid_thumbnail_image" alt="" src={portrait}></img>
              <p><strong>Bobbo</strong></p>
              <p>Super Cool Company</p>
            </div>
            <div className="grid_item">
              <img className="grid_thumbnail_image" alt="" src={portrait}></img>
              <p><strong>Bobbo</strong></p>
              <p>Super Cool Company</p>
            </div>
            <div className="grid_item">
              <img className="grid_thumbnail_image" alt="" src={portrait}></img>
              <p><strong>Bobbo</strong></p>
              <p>Super Cool Company</p>
            </div>
            <div className="grid_item">
              <img className="grid_thumbnail_image" alt="" src={portrait}></img>
              <p><strong>Bobbo</strong></p>
              <p>Super Cool Company</p>
            </div>
          </div>
        </section>


        <section className="background_1">
        </section>

        <section className="section_2">
          <p className="text_section">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </p>
          <ul className="ul_section">
            <li>"Sed ut perspiciatis unde </li>
            <li>ipsa quae ab illo invento beatae vitae d</li>
            <li>voluptas sit aspera consequuntur molores eos qui</li>
            <li>Neque porro quisquam est, it, modi</li>
          </ul>
        </section>

        <section className="background_2">
        </section>

      </div>
    )
  }
};

export default Body;
