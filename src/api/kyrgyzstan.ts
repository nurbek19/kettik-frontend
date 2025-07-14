import { BASE_URL } from "./homePage"

export type KyrgyzstanBannerDto = {
    image: string,
    title: string,
    subtitle: string
}

export type ArticlesDto = {
    results: Array<{
        id: string,
    image: string,
    title: string,
    text: string,
    created_at: string;
    extra: Array<{ id: string; image: string; text: string; }>
    }>
  }

export const kyrgyzstanApi = {
    getBanner: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/kyrgyzstan/banner/`, { signal }).then((res) => res.json() as Promise<KyrgyzstanBannerDto>);
    },
    getArticles: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/kyrgyzstan/articles/?limit=100&offset=1`, { signal }).then((res) => res.json() as Promise<ArticlesDto>);
    },
    getRegions: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/kyrgyzstan/regions`, { signal }).then((res) => res.json() as Promise<Array<{ id: string; name: string; text: string }>>);
    },
}