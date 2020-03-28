import React from "react";
import Comment from "./Comment";
import faker from "faker";
import { useParams } from "react-router-dom";

// import { useStyles } from "./styles";

export default function Comments({ getTotalRating }) {
  // const classes = useStyles();
  const itemId = Number(useParams().id);
  const randomNum = (num, size = 5) => {
    while (num > size) {
      num = num / 2;
    }
    return num;
  };
  const createComment = num => {
    faker.seed(num * 2);
    const date = faker.date
      .past()
      .toString()
      .split(" ");
    const formatedDate = `${date[1]} ${date[2]} ${date[3]}`;
    const name = faker.internet.userName();
    const text = faker.lorem.paragraph();
    const rating = Number(randomNum(faker.random.number()).toFixed(1));

    return { date: formatedDate, id: num, name, text, rating };
  };
  const createComments = num => {
    const comments = [...Array(num)];
    return comments.map((comment, i) => createComment(itemId * i));
  };

  faker.seed(itemId);
  const numOfComments = Number(randomNum(faker.random.number(), 20).toFixed());

  const comments = createComments(numOfComments);
  getTotalRating(comments);
  return (
    <div>
      {comments.map(comment => {
        return <Comment key={comment.id} data={comment} />;
      })}
    </div>
  );
}
