export const BASE_URL = 'http://138.68.66.158/api';

export type HomeBannerDto = {
    image: string,
    title: string,
    subtitle: string
}

export type ContactsDto = {
    phone: string,
    open_time: string,
    close_time: string,
    email: string,
    whatsapp: string,
    instagram: string,
    telegram: string,
    map: string
}

export type ReviewDto = {
    avatar: string;
    created_at: string;
    id: string;
    name: string;
    rating: number;
    text: string;
}

export const homePageApi = {
    getBanner: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/main/page/banner/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en", } }).then((res) => res.json() as Promise<HomeBannerDto>);
    },
    getContacts: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/main/page/contacts/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "en", } }).then((res) => res.json() as Promise<ContactsDto>);
    },
    sendApplication: async (payload: { name: string, email: string; phone: string; comment: string }) => {
        const res = await fetch(
            `${BASE_URL}/v1/main/page/application/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        );

        if (!res.ok) {
            throw new Error("Ошибка при запросе");
        }

        res.json();
    },
    getReviews: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/main/page/google/reviews/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "ru", } }).then((res) => res.json() as Promise<ReviewDto[]>);
    },
    getSliderImages: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/main/page/image/slider/`, { signal, headers: { "Accept-Language": localStorage.getItem("lang") || "ru", } }).then((res) => res.json() as Promise<Array<{ id: string; image: string; }>>);
    },
}