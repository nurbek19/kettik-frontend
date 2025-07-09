import { useQuery } from "@tanstack/react-query";

import { Banner } from "@/components/shared/Banner"

import Breadcrumbs from "@/components/shared/BreadCrumbs";
import { Card } from "@/components/shared/Card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Loader } from "@/components/shared/Loader";

import { toursApi } from "@/api/toursApi";

export const Tours = () => {
    const { data: banner, isPending: isBannerPending } = useQuery({
        queryKey: ['tours', 'banner'],
        queryFn: toursApi.getBanner,
    });

    const { data: tours, isPending: isToursPending } = useQuery({
        queryKey: ['tours', 'list'],
        queryFn: toursApi.getTours,
    });


    if (isBannerPending || isToursPending) {
        return (
            <Loader />
        )
    }


    if (!banner || !tours) {
        return null;
    }

    return (
        <div>
            <Banner img={banner.image} title={banner.title} text={banner.subtitle} />

            <div className="max-w-screen-xl mx-auto pt-[32px] pb-[120px] max-[1320px]:px-5 max-[744px]:pb-8">
                <Breadcrumbs />

                <h3 className="text-center pt-10 pb-8 max-[744px]:py-5 max-[1024px]:text-[36px] max-[744px]:text-[28px]">Туры</h3>

                <ScrollArea className="w-full whitespace-nowrap pb-5">
                    <div className="flex gap-4">
                        <Button variant="outline" className="text-xl font-semibold text-dark-gray px-3 py-2 border-[#E5E5E5] rounded-full">Все</Button>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <Checkbox id="short" className="border-[#E5E5E5] data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600" />
                                <Label htmlFor="short" className="text-xl font-semibold text-dark-gray">Короткие туры (2–3 дня)</Label>
                            </div>

                            <div className="flex items-center gap-2">
                                <Checkbox id="week" className="border-[#E5E5E5] data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600" />
                                <Label htmlFor="week" className="text-xl font-semibold text-dark-gray">Недельные туры (5–7 дней)</Label>
                            </div>

                            <div className="flex items-center gap-2">
                                <Checkbox id="long" className="border-[#E5E5E5] data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600" />
                                <Label htmlFor="long" className="text-xl font-semibold text-dark-gray">Длительные туры (более 7 дней)</Label>
                            </div>
                        </div>
                    </div>

                    <ScrollBar orientation="horizontal" />
                </ScrollArea>


                <div className="grid grid-cols-4 gap-5 pt-3 max-[1024px]:grid-cols-2 max-[744px]:grid-cols-1">
                    {tours.results.map((tour) => (
                        <Card key={tour.id} title={tour.title} price={tour.price} img={tour.image} to={`${tour.id}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}