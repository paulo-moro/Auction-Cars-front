import { useState } from "react";
import { ICommentProps } from "../../interface/propsComponents";
import CardComment from "../commentCard";
import { ListStyle } from "./style";

const ListCardComment = ({title, listComments}: ICommentProps) => {


  return (

        <ListStyle>
            <h2>
                {title}
            </h2>
            <ul className="ul--list-cars">
            {listComments?.map((comment, index) => (
                <CardComment  key={index} comments={comment} />
            ))}
            </ul>
        </ListStyle>
  );
};

export default ListCardComment;