import "./index.css";

const Fourthpage = () => {
  return (
    <div className="forthpage"> 
      <h1 className="heading">
      Things your spreadsheet wishes it could do
      </h1>
      <div className="rowalignment">
        <div className="heads">
          <h2>
            Accurate Demand Forecasting
          </h2>
          <hr/>
          <h2>
            Helix:Workflow Automation
          </h2>
          <hr/>
          <h2>
            Automated Purchase Planning
          </h2>
          <hr/>
          <h2>
          Automated Distribution Planning
          </h2> 
          <hr/>
          <h2>
            Easy Integration
          </h2>
          <hr/>
          <h2>
            Custom Dashboards
          </h2>
          <hr/>
          <h2>
            Consensus Planning
          </h2>
          <hr/>
          <button className="button">
            View all features
          </button>
        </div>
        <div className="secondpart">
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d89a9ea3f05_distribution%2520planning%2520type-2%2520-p-800.webp" alt="image"  className="words"/>
        </div>
      </div>
</div>


  );
};
export default Fourthpage;
