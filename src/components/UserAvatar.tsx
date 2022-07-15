import { Avatar, AvatarProps } from "@chakra-ui/react";
import { userAvatar, useUser } from "../hooks";

export type UserAvatarProps = {
  userId?: string;
} & Omit<Omit<AvatarProps, "src">, "name">;

export const UserAvatar: React.FC<UserAvatarProps> = ({ userId, ...rest }) => {
  const { avatarId } = userAvatar(userId);
  const { user } = useUser(userId);
  return (
    <Avatar
      src={
        user && avatarId
          ? `https://cdn.discordapp.com/avatars/${user?.id}/${avatarId}.png`
          : undefined
      }
      name={`${user?.firstName ?? ""} ${user?.lastName ?? ""}`}
      bgColor="transparent"
      {...rest}
    />
  );
};
export default UserAvatar;
