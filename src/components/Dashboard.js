import React from "react";
import logo from "../assets/logo.png";
import wallet from "../assets/wallet.png";
import security from "../assets/security.png";
import star from "../assets/star.png";
const Dashboard = () => {
  return (
    <div className="mainFeatures">
      <img src={logo} alt="logo" className="logo" />
      <div className="card">
        <div className="wallet">
				<div className="wrapper">
          <img src={wallet} alt="wallet" />
          <div className="walletText">
            <p>Wallet Balance</p>
            <p>$15,001.00</p>
          </div>
					</div>
          <img src={security} />
        </div>
        <div className="ponts">
          <img src={star} alt="star" />
          <h6>Awarded Points</h6>
          <p>35</p>
        </div>
				<div>
					<button>Pay-In</button>
					<button>Pay-Out</button>
				</div>
      </div>
    </div>
  );
};

export default Dashboard;
