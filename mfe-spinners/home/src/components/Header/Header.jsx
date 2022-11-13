import React from "react";

const Header = (props) => {
  return (
    <header className="p-10 bg-orange-600">
      <h1 className="text-white text-3xl">{props.title}</h1>
    </header>
  );
};

export default Header;
