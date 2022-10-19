import { UserIconStyle } from "./styled";

interface IUser {
    name?: string;
    initials?: string;
}

const UserIcon = ({ name, initials }: IUser) => {
    return (
        <UserIconStyle>
           <label className="icon-user"> {initials}</label>

           <label className="name-user">{name}</label>
        </UserIconStyle>
    )
}

export { UserIcon };