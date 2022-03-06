import React from "react";
import logo from "../assets/logo.png";
import wallet from "../assets/wallet.png";
import security from "../assets/security.png";
import star from "../assets/star.png";
import NavLinks from './NavLinks';
import referral from '../assets/referral.png';
const Sidebar = () => {
  return (
    <div className="mainFeatures">
      <img src={logo} alt="logo" className="logo" />
      <div className="card">
        <div className="wallet">
				<div className="wrapper">
          <img src={wallet} alt="wallet" />
          <div className="walletText">
            <span>Wallet Balance</span>
            <br/>
            <span>$15,001.00</span>
          </div>
					</div>
          <img className="eye" src={security} alt="eye" />
        </div>
        <div className="points">
        <div className="wrapper">
          <img src={star} alt="star" />
          <div className="walletText">
          <span>Awarded Points</span>
          <br/>
          <span>35</span>
          </div> 
        </div>
        </div>
				<div className="buttonPay">
					<button className="btn1">Pay-In</button>
					<button className="btn2">Pay-Out</button>
				</div>
      </div>
        <NavLinks />
        <div className='refer-card'>
        <div className='referral'>
          <img className='refer-img' src={referral} alt="referral" />
          <div className='refer-text'>
            <h4>Refer and earn</h4>
            <p>Use the below link to invite friends</p>
          </div>
          </div>
          <div className='btnCard'>
          <button className="btnGreen">Invite Friends</button>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
