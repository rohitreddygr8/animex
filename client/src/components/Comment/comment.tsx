import styles from "./comment.module.scss";
import { useState } from "react";
import SendIcon from "@assets/icons/send.svg";
import EditIcon from "@assets/icons/edit.svg";
import DeleteIcon from "@assets/icons/delete.svg";

export const Comment = () => {
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getPublishedTime = (publishedTime: number) => {
    const rtf = new Intl.RelativeTimeFormat("en", { style: "long" });
    const oneDayInMs = 86400 * 1000;
    const currentTime = Date.now();
    if (publishedTime - currentTime > oneDayInMs) {
    }
  };
  const inputHandler: React.FormEventHandler<HTMLTextAreaElement> = (e) => {
    setComment(e.currentTarget.value);
  };

  const submitComment = () => {
    setIsSubmitted(true);
  };
  const editComment = () => {
    setIsSubmitted(false);
  };
  const deleteComment = () => {
    setComment("");
  };

  return (
    <div className={styles.comment}>
      <textarea
        className={[styles.comment, isSubmitted && styles.isSubmitted].join(" ")}
        value={comment}
        onInput={inputHandler}
        onBlur={submitComment}
        disabled={isSubmitted}
      ></textarea>

      <div className={styles.buttons}>
        <button onClick={submitComment}>
          <SendIcon />
        </button>
        <button onClick={editComment}>
          <EditIcon />
        </button>
        <button onClick={deleteComment}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
