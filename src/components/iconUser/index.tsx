import { UserIconStyle } from "./styled";

interface IUser {
    name?: String;
    initials?: String;
    color?: string;
    theme?: String;
}

const UserIcon = ({ name, initials, theme, color }: IUser) => {
    return (
        <UserIconStyle color={color} theme={theme}>
           <label className="icon-user"> {initials}</label>

           <label className="name-user">{name}</label>
        </UserIconStyle>
    )
}

export { UserIcon };