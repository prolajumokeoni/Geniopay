import React from "react";
import { Link } from "react-router-dom";
import category from "../assets/category.png";
import dollar from "../assets/dollar.png";
import users from "../assets/users.png";
import tag from "../assets/tag.png";
import wallet from "../assets/wallet-2.png";
import card from "../assets/card.png";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <Link className="navLink" to="/">
        <img className="navIcons" src={category} alt="category" />
        Dashboard
      </Link>
      <Link className="navLink" to="/">
        <img className="navIcons" src={wallet} alt="wallet-2" />
        Wallet
      </Link>
      <Link className="navLink" to="/">
        <img className="navIcons" src={card} alt="category" />
        Cards
      </Link>
      <Link className="navLink" to="/fxcentre">
        <img className="navIcons" src={dollar} alt="fxcentre" />
        FX Centre
      </Link>
      <Link className="navLink" to="/beneficiaries">
        <img
          className="navIcons users"
          src={users}
          alt="beneficiary"
        />
        Beneficiaries
      </Link>
      <Link className="navLink" to="/">
        <img className="navIcons" src={tag} alt="category" />
        perks
      </Link>
    </div>
  );
};

export default NavLinks;
