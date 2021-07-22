import React from "react";

export const Post: React.FC<PostChirpProps> = (props: PostChirpProps) => {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState<string>("");

  const postChirp = async () => {
    try {
      const userRes = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      const newUser = await userRes.json();

      const chirpRes = await fetch("/api/chirps/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid: newUser.insertId, message: message }),
      });
      const newChirp = await chirpRes.json();

    } catch (err) {
      console.log(
        `There was an error with postChirp in Post.tsx! Specifically ${err}`
      );
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  return (
    <div className="container">
      <div className="my-3">
        <label htmlFor="user-input" className="form-label">
          Name?
        </label>
        <input
          type="text"
          className="form-control"
          id="user-input"
          aria-describedby="newUserInput"
          onChange={(e) => handleNameChange(e)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="message-input"
          placeholder="Message"
          onChange={(e) => handleMessageChange(e)}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => postChirp()}
      >
        Submit
      </button>
    </div>
  );
};

interface PostChirpProps {}

export default Post;