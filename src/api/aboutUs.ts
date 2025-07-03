import { BASE_URL } from "./homePage";

export type AboutBannerDto = {
    image: string,
    title: string,
    subtitle: string
}

export type HistoryDto = {
    title: string,
    text: string
}

export type DigitsDto = {
    years: number,
    amount_tourist: number,
    amount_paths: number,
    amount_gids: number
}

export type TeamDto = {
    id: string,
    name: string,
    image: string,
    text: string,
    phone: string 
}

export type AboutImageDto = {
    id: string;
    image: string;
}

export const aboutUsPageApi = {
    getBanner: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/banner/`, { signal }).then((res) => res.json() as Promise<AboutBannerDto>);
    },
    getHistory: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/history/`, { signal }).then((res) => res.json() as Promise<HistoryDto>);
    },
    getImages: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/images/`, { signal }).then((res) => res.json() as Promise<AboutImageDto[]>);
    },
    getDigits: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/in/digits/`, { signal }).then((res) => res.json() as Promise<DigitsDto>);
    },
    getTeams: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/teams/`, { signal }).then((res) => res.json() as Promise<TeamDto[]>);
    }
}