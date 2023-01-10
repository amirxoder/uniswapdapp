import React, { useState, useEffect } from "react";

// INTERNAL IMPORT
import style from "./Model.module.css";
import { GrFormClose } from "react-icons/gr";

const Model = ({ setOpenModel, connectWallet, openModel }) => {
  const walletName = ["Metamask", "Coinbase", "Wallet", "WalletConnect"];

  return (
    <div className={style.model}>
      <div className={style.model_box}>
        <div className={style.model_box_heading}>
          <p>Connect a Wallet</p>
          <div className={style.model_box_heading_close}>
            <GrFormClose
              className={style.model_box_heading_close_icon}
              onClick={() => setOpenModel(false)}
            />
          </div>
        </div>

        <div className={style.model_box_heading_wallet}>
          {walletName.map((item, index) => (
            <p
              key={index + 1}
              onClick={() => connectWallet()}
              className={style.model_box_heading_wallet_item}
            >
              {item}
            </p>
          ))}
        </div>

        <p className={style.model_box_para}>
          By connecting a wallet, you agree to WolfSawp Labs,
          <br />
          Terms of Services adn consent to its Privacy and Policy.
        </p>
      </div>
    </div>
  );
};

export default Model;
