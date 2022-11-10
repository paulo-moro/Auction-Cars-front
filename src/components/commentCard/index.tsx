import { ICommentPropsCard } from "../../interface/propsComponents";
import { UserIcon } from "../iconUser";
import { LiCard } from './style';

const CardComment= ({comments}: ICommentPropsCard) => {

    const {id, comment, user_name } = comments;

    return (
        <LiCard>
            <UserIcon color={""} theme={"red"} name={user_name} initials={user_name[0]} />
            <p>
                {comment}
            </p>
        </LiCard>
    );
};
  
export default CardComment;