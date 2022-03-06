import React from "react";
import category from "../assets/category.png";
import dollar from "../assets/dollar.png";
import users from "../assets/users.png";
import tag from "../assets/tag.png";
import wallet from "../assets/wallet-2.png";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <a href="#">
        <img className="navIcons" src={category} alt="category" />
        Dashboard
      </a>
      <a href="#">
        <img className="navIcons" src={wallet} alt="wallet-2" />
        Wallet
      </a>
      <a href="#">
        <img className="navIcons" src={dollar} alt="category" />
        Cards
      </a>
      <a href="#">
        <img
          className="navIcons users"
          src={users}
          alt="beneficiary"
        />
        Beneficiaries
      </a>
      <a href="#">
        <img className="navIcons" src={tag} alt="category" />
        perks
      </a>
    </div>
  );
};

export default NavLinks;
