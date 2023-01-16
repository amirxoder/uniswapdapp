import React from "react";

//INTERNAL IMPORT
import style from "./Toggle.module.css";

const Toggle = ({ label }) => {
  return (
    <div className={style.toggle}>
      <div className={style.toggle_box}>
        <label className={style.toggle_label} htmlFor={label}>

          
        <input
          type="checkbox"
          className={style.toggle_checkbox}
          name={label}
          id={label}
        />
          <span className={style.toggle_inner} />
        </label>
      </div>
    </div>
  );
};

export default Toggle;
