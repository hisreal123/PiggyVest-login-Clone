import React from "react";

interface InputProps{
    InputProps : {
        FullName : string | null 
        Email : string | null 
        Phone: number | null
        Password : string
        Referrer?: string | number | any
         
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
