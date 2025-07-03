import { BASE_URL } from "./homePage"

export type GalleryBannerDto = {
    image: string,
    title: string,
    subtitle: string
}

export type GalleryPlacesDto = {
    id: string,
    name: string,
    images: Array<{
        id: string,
        image: string
      }>
  }

export const galleryApi = {
    getBanner: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/gallary/banner/`, { signal }).then((res) => res.json() as Promise<GalleryBannerDto>);
    },
    getPlaces: ({ signal }: { signal: AbortSignal }) => {
        return fetch(`${BASE_URL}/v1/gallary/place/`, { signal }).then((res) => res.json() as Promise<GalleryPlacesDto[]>);
    },
}