import { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"

import LocationFilter from "./LocationFilter";
import Breadcrumbs from "@/components/shared/BreadCrumbs";
import { Banner } from "@/components/shared/Banner";
import { Loader } from "@/components/shared/Loader";

import { galleryApi, type GalleryPlacesDto } from "@/api/gallery";
import { DICTIONARY } from "@/lib/dictionary";


export const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);
    const [placeId, setPlaceId] = useState<null | string>(null);

    const lang = localStorage.getItem('lang') ?? 'en';

    const { data: bannerData, isPending: isBannerPending } = useQuery({
        queryKey: ['gallery', 'banner'],
        queryFn: galleryApi.getBanner,
    });

    const { data: places, isPending: isPlacesPending } = useQuery({
        queryKey: ['gallery', 'places'],
        queryFn: galleryApi.getPlaces,
    });

    useEffect(() => {
        if (places?.length) {
            setSelected([places[0].name]);
        }
    }, [places]);

    const locations = useMemo(() => {
        if (!places) {
            return [];
        }

        return places.map((place) => place.name);
    }, [places]);

    const selectedPlaces = useMemo(() => {
        if (!selected.length || !places) {
            return [];
        }

        const arr: GalleryPlacesDto[] = [];

        selected.forEach((selectedPlaceName) => {
            const currentSelectedPlace = places.find((place) => place.name === selectedPlaceName);

            if (currentSelectedPlace) {
                arr.unshift(currentSelectedPlace);
            }
        })

        return arr.filter((place) => selected.includes(place.name));

    }, [selected, places]);

    const selectedPlaceImages = useMemo(() => {
        if (!placeId) {
            return [];
        }

        const placeById = places?.find((place) => place.id === placeId);

        if (!placeById) {
            return [];
        }

        return placeById.images;

    }, [placeId]);

    const imageClickHandler = (id: string) => {
        setPlaceId(id);
        setOpen(true);
    }

    if (isBannerPending || isPlacesPending) {
        return (
            <Loader />
        )
    }

    if (!bannerData || !places) {
        return null;
    }

    return (
        <div>
            <Banner img={bannerData.image} title={bannerData.title} text={bannerData.subtitle} />

            <div className="max-w-screen-xl mx-auto pt-[32px] pb-[120px] max-[1320px]:px-5 max-[744px]:py-8">
                <Breadcrumbs />

                <LocationFilter locations={locations} defaultValues={selected} onChange={(options) => setSelected(options)} />

                <div className="pb-15 pt-7 max-[744px]:py-0">
                    {!selectedPlaces.length && (
                        <h5 className="text-center max-[744px]:text-[24px]">{DICTIONARY[lang].location}</h5>
                    )}

                    {selectedPlaces.map((place) => (
                        <div key={place.id}>
                            <h3 className="text-center py-8 max-[1024px]:text-[36px] max-[744px]:text-[28px] max-[744px]:py-4">{place.name}</h3>

                            <div className="flex flex-col gap-5">
                                {/* Row 1 */}
                                <div className="grid [grid-template-columns:42.875%_20%_34%] gap-5 max-[744px]:grid-cols-1">
                                    {place.images.slice(0, 3).map((imgObj, i) => (
                                        <img
                                            key={imgObj.id}
                                            src={imgObj.image}
                                            alt={`image-${i}`}
                                            loading="lazy"
                                            className="w-full h-[400px] object-cover rounded-3xl max-[1024px]:h-[220px] max-[744px]:h-auto"
                                            onClick={() => imageClickHandler(place.id)}
                                        />
                                    ))}
                                </div>

                                {/* Row 2 */}
                                <div className="grid [grid-template-columns:1fr_2fr_1fr] gap-5 max-[744px]:grid-cols-1">
                                    {place.images.slice(3, 6).map((imgObj, i) => (
                                        <img
                                            key={imgObj.id}
                                            src={imgObj.image}
                                            alt={`image-${i + 3}`}
                                            loading="lazy"
                                            className="w-full h-[400px] object-cover rounded-3xl max-[1024px]:h-[220px] max-[744px]:h-auto"
                                            onClick={() => imageClickHandler(place.id)}
                                        />
                                    ))}
                                </div>

                                {/* Row 3 */}
                                <div className="grid grid-cols-2 gap-5 max-[744px]:grid-cols-1">
                                    {place.images.slice(6, 8).map((imgObj, i) => (
                                        <img
                                            key={imgObj.id}
                                            src={imgObj.image}
                                            alt={`image-${i + 6}`}
                                            loading="lazy"
                                            className="w-full h-[400px] object-cover rounded-3xl max-[1024px]:h-[220px] max-[744px]:h-auto"
                                            onClick={() => imageClickHandler(place.id)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="!max-w-screen-xl w-full border-0 shadow-none" overlayClassName="bg-white">
                        <DialogTitle className="p-0" />
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {selectedPlaceImages.map((imageObj) => (
                                    <CarouselItem key={imageObj.id} className="w-full h-[700px] max-[1024px]:h-auto">
                                        <img src={imageObj.image} className="w-full h-full object-cover rounded-3xl" alt="tour image" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="max-[1340px]:left-2" />
                            <CarouselNext className="max-[1340px]:right-2" />
                        </Carousel>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}