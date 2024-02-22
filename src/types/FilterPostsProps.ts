import { Dispatch, SetStateAction } from "react";

type FilterPostsProps = {
    typeFilter: string;
    setTypeFilter: Dispatch<SetStateAction<string>>;
};

export default FilterPostsProps;