import './index.css';

const Lastpage = () => {
  return (
    <div className='main'>
      <div className="footer-grid">
        <div className='footer-logo-container'>
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img src="logo.svg " alt="Crest Logo" className="logo-image" />
            </div>
            <p className="para">
              Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
            </p>
          </div>
        </div>
        <div className='footer-explore'>
          <div className="footer-section">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-learn'>
          <div className="footer-section">
            <h4>Learn</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-contact'>
          <div className="footer-section">
            <h4>Contact Crest</h4>
            <p>
              <a href="mailto:sales@getcrest.ai">sales@getcrest.ai</a>
            </p>
            <p>
              Registered Office:<br />
              1507, Incubex, 11th cross road,<br />
              19th Main Road, Bengaluru, India. 560102
            </p>
            <p>
              Corporate Office:<br />
              291, All Time Space, 4th Floor,<br />
              15th A Cross, Sector - 6,<br />
              HSR Layout, Bengaluru, India. 560102
            </p>
          </div>
        </div>
        <div className="footer-social">
          <div className="social-links">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-note">
        &copy; 2024 Crest | <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
      </p>
      <p className="footer-note">
        Conifer Innovations Private Limited | CIN: U72900KA2022PTC163144
      </p>
    </div>
  );
}

export default Lastpage;
