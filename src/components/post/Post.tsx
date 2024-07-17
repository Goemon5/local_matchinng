import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  gender: string;
  contents: string;
  reward: string;
}

const Form = () => {
  const { register } = useForm<FormData>();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    gender: "",
    contents: "",
    reward: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLSelectElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setIsSubmitted(true);
    // ここにフォームデータを送信する処理を追加
  };
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      {isSubmitted ? (
        <div className="text-center mt-5">
          <h2>送信が完了しました</h2>
          <Button onClick={handleReload} className="btn btn-primary">
            更新
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-4 border rounded shadow-sm"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#f8f9fa",
          }}
        >
          <h3 className="mb-4">form</h3>
          <div className="mb-3 w-100">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              className="form-select"
              value={formData.gender || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                性別を選択してください
              </option>
              <option value="男性">男性</option>
              <option value="女性">女性</option>
              <option value="その他">その他</option>
            </select>
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="contents" className="form-label">
              お願いはなんですか？
            </label>
            <input
              id="contents"
              value={formData.contents}
              className="form-control"
              {...register("contents", {
                required: true,
                onChange: handleChange,
              })}
            ></input>
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="reward" className="form-label">
              報酬はなんですか？
            </label>
            <input
              id="reward"
              name="reward"
              value={formData.reward}
              onChange={handleChange}
              className="form-control"
            ></input>
          </div>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </form>
      )}
    </>
  );
};

export default Form;
