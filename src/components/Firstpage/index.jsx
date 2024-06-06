import "./index.css";
import Card from "../Card";

const list = [
  {
    id: 1,
    image:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg",
    head: "What to order",
    para: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
  },
  {
    id: 2,
    image:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg",
    head: "When to order",
    para: "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
  },
  {
    id: 3,
    image:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg",
    head: "How much to stock",
    para: "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
  },
  {
    id: 4,
    image:
      "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg",
    head: "Where to place",
    para: "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
  },
];

const Firstpage = () => {
  return (
    <div>
      <div className="firstpage">
        <div className="leftpart">
          <h1 className="heading">
            Every order fulfilled,<span className="ontime">on time.</span>
          </h1>
          <p className="para">
            Eliminate overstocking and under-stocking with Crest. Built by
            supply-chain experts, it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </p>
          {/* <div className="directionsdiv">
            <button className="button">Get started with Crest</button>
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg"
              alt="direction"
            />
          </div> */}
        </div>
        <div className="button-wrapper pos-rel">
          <img
            alt="Integrate crest in two days"
            className="pos-absolute hero-cta"
            data-w-id="9275ef4b-fcfa-597b-1596-96578baf76a8"
            loading="eager"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg"
          />
          <a
            className="btn-secondory b-dark"
            data-w-id="74b8b29d-8a50-b7be-9bd2-3fa4b25106c3"
            fs-modal-element="open"
            href="#"
            tabindex="0"
          >
            Get started with Crest
          </a>
        </div>
        <div>
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"
            alt="rightsideimage"
            className="rightsideimage"
          />
        </div>
      </div>
      <div className="ques">
        <h1 className="fourhead">Four key questions answered by Crest</h1>
        <div className="cards">
          {list.map((each) => (
            <Card key={each.id} each={each} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Firstpage;
