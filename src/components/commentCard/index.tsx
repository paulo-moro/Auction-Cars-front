import { ICommentPropsCard } from "../../interface/propsComponents";
import { UserIcon } from "../iconUser";
import { LiCard } from './style';

const CardComment= ({comments}: ICommentPropsCard) => {

    const {id, comment, username } = comments;

    return (
        <LiCard>
            <UserIcon color={""} theme={"red"} name={username} initials={username[0]} />
            <p>
                {comment}
            </p>
        </LiCard>
    );
};
  
export default CardComment;