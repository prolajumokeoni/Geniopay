import React from "react";
import search from "../assets/search.png";
import tree from "../assets/tree.png";
import bell from "../assets/bell.png";
import down from "../assets/down.png";
import user1 from "../assets/user1.png";
import swap from "../assets/swap.png";
import dollar from "../assets/dollar-square.png";
import convert from "../assets/convert.png";
import aed from "../assets/aed.png";
import searchd from "../assets/search-down.png";
import euro from "../assets/euro.png";
import sendnew from "../assets/sendnew.png";
import { Link } from "react-router-dom";
import gain from "../assets/GAIN.png";

const Fxcentre = () => {
	const data = [
		{ name: "USD US Dollar", rate: 1.600593, Change: "+0.523" },
		{ name: "USD US Dollar", rate: 1.600593, Change: "+0.523" },
		{ name: "USD US Dollar", rate: 1.600593, Change: "+0.532"},
		{ name: "USD US Dollar", rate: 1.600593, Change: "+0.532"},
		{ name: "USD US Dollar", rate: 1.600593, Change: "+0.532"},
	]
	
  return (
    <div className="dashboard">
      <nav className="nav1">
        <h1>Fxcentre</h1>
        <div className="nav0">
          <div className="search">
            <img className="imgSearch" src={search} alt="search" />
            <input placeholder="search" />
          </div>
          <img className="tree" src={tree} alt="tree" />
          <p className="bodyColor">0 planted</p>
          <img className="bell" src={bell} alt="bell" />
          <div className="bgWhite">
            <img src={user1} alt="user1" />
            <div>
              <p className="greenNav new">Verified</p>
              <h4 className="new">Kudi LTD</h4>
            </div>
            <img className="down" src={down} alt="down arrow" />
          </div>
        </div>
      </nav>
      <nav>
        <div className="topNav">
          <div className="navSmall">
            <img src={swap} alt="rate" />
            <h4 className="spaceNav">Balance Exchange</h4>
          </div>

          <div className="navSmall">
            <img src={dollar} alt="rate" />
            <h4 className="spaceNav">Forward Rate</h4>
          </div>
          <div className="navSmall smNav">
            <img src={convert} alt="rate" />
            <h4 className="spaceNav greenText">Convert & Send</h4>
          </div>
        </div>
        <div className="mainFx">
          <div>
            <h4>Amount</h4>
            <div className="search searchFx">
              <input placeholder="$0.00" />
            </div>
            <span className="euroText">
              <h5 className="new">Exchange rate:</h5>
              <h4 className="new boldC">$1 = N20</h4>
            </span>
          </div>
          <div>
            <h4>From</h4>
            <div className="search searchFx searchFxs">
              <img src={aed} />
              <input placeholder="USD - US Dollar" />
              <img src={searchd} alt="search down" />
            </div>
            <span className="euroText">
              <h5 className="new">You send:</h5>
              <h4 className="new boldC"> $ 0.00</h4>
            </span>
            <div className="baseP">
              <img className="downSwap" src={swap} alt="swap" />
            </div>
          </div>
          <div>
            <h4>To</h4>
            <div className="search searchFx searchFxs">
              <img src={euro} />
              <input placeholder="USD - US Dollar" />
              <img src={searchd} alt="search down" />
            </div>
            <span className="euroText">
              <h5 className="new">They receive:</h5>
              <h4 className="new boldC">€ 0.00</h4>
            </span>
          </div>
        </div>
        <div className="convertDiv">
          <h3 className="fees">Fees: $0:00</h3>
          <button className="convertBtn">
            <img className="btnvert" src={sendnew} alt="convert" />
            Convert & Send
          </button>
        </div>
      </nav>
      <section>
        <div className="headTable">
          <Link className="borderLink" to="/beneficiaries">
            Live Rates
          </Link>
          <Link className="borderLink" to="/beneficiaries">
            Other Companies Rates
          </Link>
        </div>
				<table>
        <tr className="trHead">
          <th>Currency</th>
          <th>Rate</th>
          <th>Change(24 hrs)</th>
          <th>Chart(24 hrs)</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td><img src={euro} /> {val.name}</td>
              <td>{val.rate}</td>
              <td>{val.Change}</td>
              <td> <img src={gain} /></td>
            </tr>
          )
        })}
      </table>
      </section>
    </div>
  );
};

export default Fxcentre;
