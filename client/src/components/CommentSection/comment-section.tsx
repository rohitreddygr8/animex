import { Comment } from "@components";
import { api } from "@utils";
import styles from "./comment-section.module.scss";

export const CommentSection = ({ episodeId }: { episodeId: string }) => {
  // const comments= api.getComments(episodeId);
  // const loopThroughComments=(comments:any) => {
  //   for (const key in comments) {
  //    if (comments.hasOwnProperty(key)) {
  //     console.log(comments[key]);
  //     loopThroughComments(comments[key])
  //    }
  //   }
  // }
  // loopThroughComments(comments)
  return (
    <section className={styles.commentSection}>
      <Comment />
    </section>
  );
};
