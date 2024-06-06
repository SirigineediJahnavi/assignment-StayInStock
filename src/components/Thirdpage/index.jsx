// import { Thirdpage } from './Thirdpage'

import "./index.css";
export const Thirdpage = () => {
  return (
    <div className="rowalignment">
      <div>
        <p>
          D2C brands face issues with supply chain management and high growth
          startups are not equipped to run their demand forecast manually. Crest
          automates all the workflows and helps brands predict high demand
          periods and be ready to cater to customer demands. It has a direct
          impact on the revenue readiness of a company and thats the value we
          see Crest unlocking for many companies in the future. Rahul and team
          have built a robust product with years of their experience distilled
          into the workflows.
        </p>
        <div className="profilerow">
          <div className="justprofile">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"
              alt="profile"
              className="profile"
            />
            <div className="names">
              <h3>Diksha Pande</h3>
              <p>Co-founder, Samosa Party</p>
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg"
            alt="samosa party"
            className="samosa"
          />
        </div>
        <div className="leftright">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
            alt="left-side"
            className="left"
          />
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
            alt="right-side"
          />
        </div>
        <div className="buttons">
          <button className="button">
            <h1 className="discount">Upto 95%</h1>
            Demand Fulfilment
          </button>
          <button className="button">
            <h1 className="discount">3%</h1>
            Daily Stock-out
          </button>
          <button className="buttonread">
            Read story
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dd545ea3ebe_Vector.svg"
              alt="arrow"
            />
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp"
          alt="burger"
          className="burger"
        />
      </div>
    </div>
  );
};

export default Thirdpage;
