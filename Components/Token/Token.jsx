import React, { useState, useEffect } from "react";

// INTRERNAL IMPORT
import style from "./Token.module.css";
import { Toggle } from "../";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";

const Token = ({ openSetting, setOpenSetting }) => {
  return (
    <div className={style.token}>
      <div className={style.token_box}>
        <div className={style.token_box_heading}>
          <h4>Setting</h4>
          <BsFillGearFill
            className={style.token_setting_icon}
            onClick={() => setOpenSetting(false)}
          />
        </div>
        <p className={style.token_box_para}>
          Slippage torance
          <AiFillLock className={style.token_box_para_icon} />
        </p>

        <div className={style.token_box_input}>
          <button>Auto</button>
          <input type="text" placeholder="0.10%" />
        </div>

        <p className={style.token_box_para}>
          Slippage torance
          <AiFillLock className={style.token_box_para_icon} />
        </p>

        <div className={style.token_box_input}>
          <input type="text" placeholder="30" />
          <button>minutes</button>
        </div>

        <h2>Interface Setting</h2>

        <div className={style.token_box_toggle}>
          <p className={style.token_box_para}>Transaction Deadline</p>
          <Toggle label={"No"} />
        </div>
      </div>
    </div>
  );
};

export default Token;
