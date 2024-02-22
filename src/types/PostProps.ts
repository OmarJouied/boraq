import UserType from "./UserType";

type PostProps = {
    _id: string;
    postContent: string;
    timestamp: number;
    user: UserType;

};

export default PostProps;