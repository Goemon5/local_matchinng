import React, { useState, useEffect } from "react";

interface Post {
  title: string;
  name: string;
  email: string;
  gender: string;
  contents: string;
}

function Users() {
  const [users, setUsers] = useState<Post[]>([]);

  useEffect(() => {
    // ローカルAPIからユーザーデータを取得
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
      {users.map((user, index) => (
        <div className="card mb-4 mx-auto" key={index} style={{ width: "50%" }}>
          <h5 className="card-header">{user.title}</h5>
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.contents}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Users;
