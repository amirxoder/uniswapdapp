import React, { useState, useEffect, useContext } from "react";

import Image from "next/image";
import Link from "next/link";
import { GiWolfHowl } from "react-icons/gi";
import { TfiSearch } from "react-icons/tfi";
import { FaEthereum } from "react-icons/fa";

// INTERNAL IMPORT
import style from "./Navbar.module.css";
import { Model, TokenList } from "../";

const Navbar = () => {
  const menuItem = [
    { name: "Swap", link: "/" },
    { name: "Token", link: "/" },
    { name: "Pools", link: "/" },
  ];

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(true);

  const showTokenBoxHandler = () => {
    setOpenTokenBox((prev) => !prev);
  };

  return (
    <div className={style.navbar}>
      <div className={style.navbar_box}>
        <div className={style.navbar_box_left}>
          {/* Logo image */}
          <div className={style.navbar_box_left_img}>
            <GiWolfHowl className={style.navbar_box_left_img_logo} />
          </div>
          {/* Menu Items */}
          <div className={style.navbar_box_left_menu}>
            {menuItem.map((item, index) => (
              <Link
                href={{ pathname: `${item.name}`, query: `${item.link}` }}
                key={index}
                className="link"
              >
                <p className={style.navbar_box_left_menu_item}>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* // Middle Section */}
        <div className={style.navbar_box_middle}>
          <TfiSearch className={style.navbar_box_middle_search_icon} />

          <input
            type="text"
            className={style.navbar_box_middle_search_input}
            placeholder="Search Token"
          />
        </div>

        {/* Right Section */}
        <div className={style.navbar_box_right}>
          <div
            className={style.navbar_box_right_box}
            onClick={() => showTokenBoxHandler()}
          >
            <div className={style.navbar_box_right_box_img}>
              <FaEthereum />
            </div>
            <p>Network Name</p>
          </div>

          <button onClick={() => setOpenModel(true)}>Address</button>

          {openModel && (
            <Model
              setOpenModel={setOpenModel}
              connectWallet="Connect"
              openModel={openModel}
            />
          )}
        </div>
      </div>

      <TokenList
        tokenData="he"
        setOpenTokenBox={setOpenTokenBox}
        openTokenBox={openTokenBox}
      />
    </div>
  );
};

export default Navbar;
