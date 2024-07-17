import React, { useState, useEffect } from "react";
import styles from "./styles/Card.module.css";
import { Button, Modal } from "react-bootstrap";

interface Post {
  name: string;
  email: string;
  gender: string;
  title: string;
  contents: string;
  reward: string;
}

const Card = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    // ローカルAPIからユーザーデータを取得
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("データ取得エラー:", error));
  }, []);

  const handleShowModal = (user: Post) => {
    setSelectedPost(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  return (
    <>
      <div className="container mt-5">
        {posts.map((post, index) => (
          <div
            className="card mb-4 mx-auto"
            key={index}
            style={{ width: "50%" }}
          >
            <div className={styles.postCard}>
              <h2 className={styles.postTitle}>{post.contents}</h2>
              <p className={styles.postSnippet}>{post.reward}</p>
              <p className={styles.postMeta}>{post.name}</p>
              <Button onClick={() => handleShowModal(post)}>
                Show Details
              </Button>
            </div>
          </div>
        ))}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>プロフィール</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedPost && (
              <>
                <p>
                  <strong>名前:</strong> {selectedPost.name}
                </p>
                <p>
                  <strong>内容:</strong> {selectedPost.contents}
                </p>
                <p>
                  <strong>報酬:</strong> {selectedPost.reward}
                </p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              閉じる
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Card;
