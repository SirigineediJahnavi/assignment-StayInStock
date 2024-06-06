import './index.css'

const Header=()=>{
    return(
        <div className="header">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d8262cbfe9e806aca29403_Crest%20white%20font%20small.png" alt="logo" className="logo"/>
            
            <div className="details">
                <p className="eachdetail">Product</p>
                <p className="eachdetail">Pricing</p>
                <p className="eachdetail">Industry</p>
                <p className="eachdetail">Customer Stories</p>
                <p className="eachdetail">About</p>
                <p className="eachdetail">Blog</p>
            </div>
            <div className="loginside">
                <p className="login">Login</p>
                <button className="button">
                    Talk to Us
                </button>
            </div>
        </div>
    )
}
export default Header