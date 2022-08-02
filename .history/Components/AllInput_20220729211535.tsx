import React from "react";

interface {
    InputProps : {
        FullName : string | null 
    }
}[]


export const AllInput = () => {
  return (
    <div>
      <label htmlFor="FullName"> Full Name</label>
      <br></br>
      <input type="text" name="" id="" />
    </div>
  );
};
