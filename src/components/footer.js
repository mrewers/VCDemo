import React from 'react';

class Footer extends React.Component {

  render() {
    return(
      <footer className="site_footer">
        <div className="footer_content">
          <h4 className="mailing_title">Joint Our Mailing List:</h4>
          <input className="mailing_input" placeholder="Email Address"></input>
          <button className="sign_up_button">Sign Up</button>
        </div>
      </footer>
    )
  }
};

export default Footer;
