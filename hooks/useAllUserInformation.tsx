import useSWR from "swr";
import { UserInformation } from "../index.d";

const useAllUserInformation = (
): {
    userInformation: Array<UserInformation>;
    isLoading: boolean;
    isError: boolean;
} => {
    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR(
        () =>
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/user/all`
        
    );

    return {
        userInformation: data,
        isLoading: !error && !data,
        isError: error,
    }
}

export default useAllUserInformation;