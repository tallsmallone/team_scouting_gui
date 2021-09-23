import useSWR from "swr";
import { UserInformation } from "../index.d";

const useUserInformation = (
    id: number
): {
    userInformation: UserInformation;
    isLoading: boolean;
    isError: boolean;
} => {
    const { data, error } = useSWR(
        () =>
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/user/${id}`
    )

    return {
        userInformation: data,
        isLoading: !error && !data,
        isError: error,
    }
}

export default useUserInformation;