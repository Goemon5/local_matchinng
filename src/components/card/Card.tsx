import React, { useState, useEffect } from "react";

import styles from "./styles/Card.module.css";

const Card = () => {
  return (
    <>
      <div className={styles.posttitle}>
        <div className={styles.postCard}>
          <h2 className={styles.postTitle}>タイトル1</h2>
          <p className="post-snippet">内容の一部...</p>
          <p className="post-meta">2024年6月25日 - 投稿者名</p>
        </div>
        <div className="post-card">
          <h2 className="post-title">タイトル1</h2>
          <p className="post-snippet">内容の一部...</p>
          <p className="post-meta">2024年6月25日 - 投稿者名</p>
        </div>
        <div className="post-card">
          <h2 className="post-title">タイトル1</h2>
          <p className="post-snippet">内容の一部...</p>
          <p className="post-meta">2024年6月25日 - 投稿者名</p>
        </div>
      </div>
    </>
  );
};
export default Card;
