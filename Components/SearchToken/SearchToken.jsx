import React, { useState } from "react";

// INTERNAL IMPORT
import style from "./SearchToken.module.css";

//icons
import { FaEthereum } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchToken = ({ openToken, tokens, tokesData }) => {
  const [active, setActive] = useState(1);

  const coin = [
    {
      img: <FaEthereum />,
      name: "ETH",
    },
    {
      img: <FaEthereum />,
      name: "ETH",
    },
    {
      img: <FaEthereum />,
      name: "ETH",
    },
    {
      img: <FaEthereum />,
      name: "ETH",
    },
    {
      img: <FaEthereum />,
      name: "ETH",
    },
    {
      img: <FaEthereum />,
      name: "ETH",
    },
    {
      img: <FaEthereum />,
      name: "ETH",
    },
    {
      img: <FaEthereum />,
      name: "ETH",
    },
    {
      img: <FaEthereum />,
      name: "ETH",
    },
  ];

  return (
    <div className={style.searchToken}>
      <div className={style.searchToken_box}>
        <div className={style.searchToken_box_heading}>
          <h4>Select a token</h4>
          <AiOutlineClose
            onClick={() => openToken(false)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={style.searchToken_box_search}>
          <AiOutlineSearch className={style.searchToken_box_search_img} />
          <input type="text" placeholder="Search name or paste the address" />
        </div>

        <div className={style.searchToken_box_tokens}>
          {coin.map((item, index) => (
            <span
              key={index + 1}
              className={active === index + 1 ? `${style.active}` : ``}
              onClick={() => {
                setActive(index + 1);
                tokens({ name: item.name, img: item.img });
              }}
            >
              {item.img}
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
