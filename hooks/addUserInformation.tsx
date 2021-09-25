import { UserInformation } from "../index.d"

const addUserInformation = (
    userInformation: UserInformation
) => {
    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/user/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: userInformation.username,
            playerLastName: userInformation.playerLastName,
            playerFirstName: userInformation.playerFirstName,
            position: userInformation.position,
            team: userInformation.team,
            discordUsername: userInformation.discordUsername,
            tpe: userInformation.tpe,
            joined: userInformation.joined,
            lastVisit: userInformation.lastVisit,
            active: userInformation.active,
            contacted: userInformation.contacted,
            want: userInformation.want,
            avoid: userInformation.avoid,
            drafted: userInformation.drafted,
            draftPick: userInformation.draftPick,
        }),
    })
    .then(response => {
        if (!response.statusText || response.statusText !== "OK") {
            throw response;
        }
    })
}

export default addUserInformation;