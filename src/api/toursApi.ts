import { BASE_URL } from "./homePage"

export type ToursBannerDto = {
    image: string,
    title: string,
    subtitle: string
}

export type ToursDto = {
    count: number;
    results: Array<{
        id: string,
        video: string,
        image: string,
        title: string,
        price: number
    }>
}

export type FAQDto = {
    id: string;
    answer: string;
    question: string;
}

export type TourDetailDto = {
    advantages: Array<{ id: string; title: string; }>;
    difficulty: string;
    disadvantages: Array<{ id: string; title: string; }>;
    duration: number;
    go_dates: Array<{ id: string; go_date: string; }>;
    image: string;
    images: Array<{ id: string; image: string }>
    living_places: Array<{ id: string; name: string }>;
    map: string;
    price: number;
    programs: Array<{ id: string; day: number; image: string; text: string }>;
    title: string;
    type: string;
    video: string;
    currency: string;
}

export const toursApi = {
    getBanner: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/tours/banner/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en", } }).then((res) => res.json() as Promise<ToursBannerDto>);
    },
    getTours: ({ signal }: { signal: AbortSignal }, params: { limit: number, offset: number, min_days: number | null, max_days: number | null }) => {
        let queryString = '';

        if (params.max_days && params.max_days) {
            queryString = `&max_days=${params.max_days}&min_days=${params.min_days}`;
        }

        return fetch(`${BASE_URL}/v1/tours/?limit=${params.limit}&offset=${params.offset}${queryString}`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en", } }).then((res) => res.json() as Promise<ToursDto>);
    },
    getTourById: ({ signal }: { signal: AbortSignal }, id?: string) => {
        return fetch(`${BASE_URL}/v1/tours/${id}`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en", } }).then((res) => res.json() as Promise<TourDetailDto>);
    },
    getFAQ: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/tours/faq`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en", } }).then((res) => res.json() as Promise<FAQDto[]>);
    },
}