import { ReactNode } from "react";

type UserLayerProps = {
    userLogoUrl: string;
    username: string;
    additionalElement: ReactNode;
    children: ReactNode;
};

export default UserLayerProps;