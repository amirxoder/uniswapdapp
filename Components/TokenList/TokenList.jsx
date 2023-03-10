import React from "react";
import { GrFormClose } from "react-icons/gr";

// INTERNAL IMPORT
import style from "./TokenList.module.css";

const TokenList = ({
  tokenData,
  setOpenTokenBox,
  openTokenBox,
  showTokenBoxHandler,
}) => {
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div
      className={
        openTokenBox
          ? `${style.tokenList} ${style.show}`
          : `${style.tokenList} ${style.hide}`
      }
    >
      <GrFormClose
        className={style.tokenList_close_icon}
        onClick={() => showTokenBoxHandler()}
      />

      <div className={style.tokenList_title}>
        <h2>Your Token List</h2>
      </div>

      {data.map((item, index) => (
        <div className={style.tokenList_box} key={index}>
          <div className={style.tokenList_box_info}>
            <p className={style.tokenList_box_info_symbol}>Hey</p>

            <p>
              <span>34</span>
              Gold Coin
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenList;
