export interface UserInformation {
    id: number,
    username: string,
    playerLastName: string,
    playerFirstName: string,
    position: string,
    team: string,
    discordUsername: string,
    tpe: number,
    joined: string,
    lastVisit: string,
    active: boolean,
    contacted: boolean,
    want: boolean,
    avoid: boolean,
    drafted: boolean,
    draftPick: number,
}

export interface Commenters {
    id: number,
    username: string,
}

export interface TeamComments {
    id: number,
    userId: number,
    commenterId: number,
    comment: string,
}