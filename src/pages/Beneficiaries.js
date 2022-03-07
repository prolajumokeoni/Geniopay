import React from "react";
import search from "../assets/search.png";
import tree from "../assets/tree.png";
import bell from "../assets/bell.png";
import down from "../assets/down.png";
import user1 from "../assets/user1.png";
import add from "../assets/add.png";
import { Link } from "react-router-dom";
import green from "../assets/green.png";
import send from "../assets/send.png";
import flow from "../assets/flow.png";
import trash from "../assets/trash.png";
import profile from "../assets/profile-2.png";
const Beneficiaries = () => {
  return (
    <div className="dashboard">
      <nav className="nav1">
        <h1>Beneficiaries</h1>
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
              <h4 className="new">Huss Smith</h4>
            </div>
            <img className="down" src={down} alt="down arrow" />
          </div>
        </div>
      </nav>
      <nav className="nav2">
        <h2> Your Beneficiary (s)</h2>
        <button className="addBtn">
          <img src={add} />
          Add new beneficiary
        </button>
      </nav>
      <section className="container">
        <nav className="accounts">
          <Link className="borderLink" to="/beneficiaries">Own Accounts</Link>
          <Link className="borderLink" to="/beneficiaries">
            Third Party Accounts
          </Link>
          <Link className="borderLink" to="/beneficiaries">Borderless Recipient</Link>
          <Link className="borderLink" to="/beneficiaries">Mobile Money Recipients</Link>
        </nav>
        <nav className="lastNav">
          <h3 className="headerLast">53 Beneficiaries</h3>
          <div className="greenWrapper">
            <div className="search downSearch">
              <img className="imgSearch" src={search} alt="search" />
              <input placeholder="search" />
            </div>
            <h3>Sort by:</h3>
            <h3 className="greenText">All</h3>
            <img src={green} alt="green" />
          </div>
        </nav>
        <div className="cardWrapper">
          <div className="cardUser">
          <div className="euro">
          <div className="euroSmall">
          <h3 className="euroi">€</h3>
            <h4>Cameron Williamson</h4>
            </div>
            <img src={flow} alt="overflow" />
            </div>
            <h3 className="new">PL9XXXXXXXXXXXX775</h3>
            <span className="euroText">
            <h4 className="new darkBlue">Cameron Williamson</h4>
            <h6 className="new bodyColor">EUR</h6>
            </span>
            <div className="borderEuro">
            <div className="borderE">
            
            <span className="euroI">
            <img src={send} alt="pay"/>
              <h6 className="darkBlue spaceE">Pay</h6>
              </span>
              <span className="euroI">
              <img src={profile}  alt="profile"/>
              <h6 className="spaceE">Set as default</h6>
              </span>
              <span className="euroI">
              <img src={trash} alt="trash" />
              <h6 className="redText spaceE">Remove</h6>
              </span>
              </div>
            </div>
          </div>
          <div className="cardUser">
          <div className="euro">
          <div className="euroSmall">
          <h3 className="euroi">€</h3>
            <h4>Cameron Williamson</h4>
            </div>
            <img src={flow} alt="overflow" />
            </div>
            <h3 className="new">PL9XXXXXXXXXXXX775</h3>
            <span className="euroText">
            <h4 className="new darkBlue">Cameron Williamson</h4>
            <h6 className="new bodyColor">EUR</h6>
            </span>
            <div className="borderEuro">
            <div className="borderE">
            
            <span className="euroI">
            <img src={send} alt="pay"/>
              <h6 className="darkBlue spaceE">Pay</h6>
              </span>
              <span className="euroI">
              <img src={profile}  alt="profile"/>
              <h6 className="spaceE">Set as default</h6>
              </span>
              <span className="euroI">
              <img src={trash} alt="trash" />
              <h6 className="redText spaceE">Remove</h6>
              </span>
              </div>
            </div>
          </div>
          <div className="cardUser">
          <div className="euro">
          <div className="euroSmall">
          <h3 className="euroi">€</h3>
            <h4>Cameron Williamson</h4>
            </div>
            <img src={flow} alt="overflow" />
            </div>
            <h3 className="new">PL9XXXXXXXXXXXX775</h3>
            <span className="euroText">
            <h4 className="new darkBlue">Cameron Williamson</h4>
            <h6 className="new bodyColor">EUR</h6>
            </span>
            <div className="borderEuro">
            <div className="borderE">
            
            <span className="euroI">
            <img src={send} alt="pay"/>
              <h6 className="darkBlue spaceE">Pay</h6>
              </span>
              <span className="euroI">
              <img src={profile}  alt="profile"/>
              <h6 className="spaceE">Set as default</h6>
              </span>
              <span className="euroI">
              <img src={trash} alt="trash" />
              <h6 className="redText spaceE">Remove</h6>
              </span>
              </div>
            </div>
          </div>
          <div className="cardUser">
          <div className="euro">
          <div className="euroSmall">
          <h3 className="euroi">€</h3>
            <h4>Cameron Williamson</h4>
            </div>
            <img src={flow} alt="overflow" />
            </div>
            <h3 className="new">PL9XXXXXXXXXXXX775</h3>
            <span className="euroText">
            <h4 className="new darkBlue">Cameron Williamson</h4>
            <h6 className="new bodyColor">EUR</h6>
            </span>
            <div className="borderEuro">
            <div className="borderE">
            
            <span className="euroI">
            <img src={send} alt="pay"/>
              <h6 className="darkBlue spaceE">Pay</h6>
              </span>
              <span className="euroI">
              <img src={profile}  alt="profile"/>
              <h6 className="spaceE">Set as default</h6>
              </span>
              <span className="euroI">
              <img src={trash} alt="trash" />
              <h6 className="redText spaceE">Remove</h6>
              </span>
              </div>
            </div>
          </div>
          <div className="cardUser">
          <div className="euro">
          <div className="euroSmall">
          <h3 className="euroi">€</h3>
            <h4>Cameron Williamson</h4>
            </div>
            <img src={flow} alt="overflow" />
            </div>
            <h3 className="new">PL9XXXXXXXXXXXX775</h3>
            <span className="euroText">
            <h4 className="new darkBlue">Cameron Williamson</h4>
            <h6 className="new bodyColor">EUR</h6>
            </span>
            <div className="borderEuro">
            <div className="borderE">
            
            <span className="euroI">
            <img src={send} alt="pay"/>
              <h6 className="darkBlue spaceE">Pay</h6>
              </span>
              <span className="euroI">
              <img src={profile}  alt="profile"/>
              <h6 className="spaceE">Set as default</h6>
              </span>
              <span className="euroI">
              <img src={trash} alt="trash" />
              <h6 className="redText spaceE">Remove</h6>
              </span>
              </div>
            </div>
          </div>
          <div className="cardUser">
          <div className="euro">
          <div className="euroSmall">
          <h3 className="euroi">€</h3>
            <h4>Cameron Williamson</h4>
            </div>
            <img src={flow} alt="overflow" />
            </div>
            <h3 className="new">PL9XXXXXXXXXXXX775</h3>
            <span className="euroText">
            <h4 className="new darkBlue">Cameron Williamson</h4>
            <h6 className="new bodyColor">EUR</h6>
            </span>
            <div className="borderEuro">
            <div className="borderE">
            
            <span className="euroI">
            <img src={send} alt="pay"/>
              <h6 className="darkBlue spaceE">Pay</h6>
              </span>
              <span className="euroI">
              <img src={profile}  alt="profile"/>
              <h6 className="spaceE">Set as default</h6>
              </span>
              <span className="euroI">
              <img src={trash} alt="trash" />
              <h6 className="redText spaceE">Remove</h6>
              </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beneficiaries;
