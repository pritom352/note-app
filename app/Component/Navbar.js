import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className=" flex justify-between  max-w-8/10 mx-auto border py-5 shadow-2xl shadow-sky-300">
      <h1>📝 Personal Notes</h1>
      <ul className=" flex gap-8">
        <li>home</li>
        <li>All Notes</li>
        <li>Create Note</li>
      </ul>
      <button>Add Note</button>
    </div>
  );
};

export default Navbar;
