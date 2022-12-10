import { ICommentPropsCard, IComment } from "../../interface/propsComponents";
import { UserIcon } from "../iconUser";
import { LiCard } from './style';
import { convertInitialsName } from "../../utils/index";

const CardComment= ({comments}: ICommentPropsCard) => {

    const { comment, user_name } = comments;
    
    const initialsName = convertInitialsName(user_name.toString() || "");

    return (
        <LiCard>
            <UserIcon color={""} theme={"red"} name={user_name} initials={initialsName} />
            <p>{comment}</p>
        </LiCard>
    );
};
  
export default CardComment;