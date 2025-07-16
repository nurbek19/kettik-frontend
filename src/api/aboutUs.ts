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
    amount_gids: number,
    background_image: string,

}

export type TeamDto = {
    id: string,
    name: string,
    image: string,
    text: string,
    duty: string
}

export type AboutImageDto = {
    id: string;
    image: string;
}

export const aboutUsPageApi = {
    getBanner: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/banner/`, {
            signal,
            headers: { "Accept-Language": localStorage.getItem("lang") || "en" }
        }).then((res) => res.json() as Promise<AboutBannerDto>);
    },
    getHistory: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/history/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en" } }).then((res) => res.json() as Promise<HistoryDto>);
    },
    getImages: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/images/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en" } }).then((res) => res.json() as Promise<AboutImageDto[]>);
    },
    getDigits: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/in/digits/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en" } }).then((res) => res.json() as Promise<DigitsDto>);
    },
    getTeams: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/teams/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en" } }).then((res) => res.json() as Promise<TeamDto[]>);
    },
    getPrivacy: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/about/us/privacy/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en" } }).then((res) => res.json() as Promise<{ id: string; text: string; }>);
    },
}