import useSWR from "swr";
import { UserInformation } from "../index.d";

const useUserInformation = (
): {
    userInformation: Array<UserInformation>;
    isLoading: boolean;
    isError: boolean;
} => {
    const { data, error } = useSWR(
        () =>
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/user/all`
    )

    return {
        userInformation: data,
        isLoading: !error && !data,
        isError: error,
    }
}

export default useUserInformation;