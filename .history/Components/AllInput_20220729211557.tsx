import React from "react";

interface InputProps{
    InputProps : {
        FullName : string | null 
        Email
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
