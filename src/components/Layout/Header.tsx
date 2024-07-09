import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="title">サービス名</h1>
        <h1 className="links">
          <a href="#" className="links_home">
            ホーム
          </a>
          <a href="#" className="links_home">
            投稿
          </a>
        </h1>
      </header>
    </>
  );
};
export default Header;
