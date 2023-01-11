import React, { useState, useContext } from "react";
import { GrFormClose } from "react-icons/gr";

import { Token, SearchToken } from "../";
import { FaEthereum } from "react-icons/fa";
import {BsFillGearFill} from 'react-icons/bs'
import style from "./HeroSection.module.css";

const HeroSection = ({ accounts, tokenData }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  // Token One
  const [tokenOne, setTokenOne] = useState({
    name: "",
    img: "",
  });

  // Token Two
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    img: "",
  });

  return (
    <div className={style.heroSection}>
      <div className={style.heroSection_box}>
        <div className={style.heroSection_box_headding}>
          <p>Swap</p>
          <div
            onClick={() => setOpenSetting(true)}
            className={style.heroSection_box_headding_close}
          >
            <BsFillGearFill
              className={style.heroSection_box_headding_close_icon}
            />
          </div>
        </div>
        <div className={style.heroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => openToken(true)}>
            {tokenOne.img || <FaEthereum />}
            {tokenOne.name || "ETH"}
            <small>9474</small>
          </button>
        </div>

        <div className={style.heroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => openToken(true)}>
            {tokenTwo.img || <FaEthereum />}
            {tokenTwo.name || "ETH"}
            <small>9474</small>
          </button>
        </div>

        {accounts ? (
          <button className={style.heroSection_box_btn}>Connect Wallet</button>
        ) : (
          <button className={style.heroSection_box_btn}>Swap</button>
        )}
      </div>

      {openSetting && <Token openSetting={openSetting} />}
      {openToken && (
        <SearchToken
          openToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}
      {openToken && (
        <SearchToken
          openToken={setOpenTokenTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  );
};

export default HeroSection;
