import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { Banner } from "@/components/shared/Banner"

import Breadcrumbs from "@/components/shared/BreadCrumbs";
import { Card } from "@/components/shared/Card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Loader } from "@/components/shared/Loader";

import { toursApi } from "@/api/toursApi";

import { DICTIONARY } from "@/lib/dictionary";

export const Tours = () => {
    const [page, setPage] = useState(1);
    const [minDays, setMinDays] = useState<number | null>(null);
    const [maxDays, setMaxDays] = useState<number | null>(null);
    const [short, setShort] = useState(false);
    const [week, setWeek] = useState(false);
    const [long, setLong] = useState(false);

    const lang = localStorage.getItem('lang') ?? 'ru';

    const limit = 12;
    const offset = (page - 1) * limit;

    const { data: banner, isPending: isBannerPending } = useQuery({
        queryKey: ['tours', 'banner'],
        queryFn: toursApi.getBanner,
    });

    const { data: tours, isPending: isToursPending } = useQuery({
        queryKey: ['tours', 'list', { limit, offset, minDays, maxDays }],
        queryFn: (meta) => toursApi.getTours(meta, { limit, offset, min_days: minDays, max_days: maxDays }),
        // keepPreviousData: true,
    });

    const totalPages = Math.ceil((tours?.count || 0) / limit);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);


    if (isBannerPending) {
        return (
            <Loader />
        )
    }


    if (!banner) {
        return null;
    }

    console.log(minDays, maxDays);

    return (
        <div>
            <Banner img={banner.image} title={banner.title} text={banner.subtitle} />

            <div className="max-w-screen-xl mx-auto pt-[32px] pb-[120px] max-[1320px]:px-5 max-[744px]:pb-8">
                <Breadcrumbs />

                <h3 className="text-center pt-10 pb-8 max-[744px]:py-5 max-[1024px]:text-[36px] max-[744px]:text-[28px]">{DICTIONARY[lang].tours}</h3>

                <ScrollArea className="w-full whitespace-nowrap pb-5">
                    <div className="flex gap-4">
                        <Button variant="outline" className="text-xl font-semibold text-dark-gray px-3 py-2 border-[#E5E5E5] rounded-full"
                            onClick={() => { setShort(false); setWeek(false); setLong(false); setMinDays(null); setMaxDays(null); }}
                        >{DICTIONARY[lang].all}</Button>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Checkbox
                                    id="short"
                                    checked={short}
                                    className="border-[#E5E5E5] data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 cursor-pointer"
                                    onCheckedChange={(v: boolean) => {
                                        setShort(v);
                                        setWeek(false);
                                        setLong(false);
                                        if (v) {
                                            setMinDays(2); setMaxDays(3);
                                        } else {
                                            setMinDays(null); setMaxDays(null);
                                        }
                                    }}
                                />
                                <Label htmlFor="short" className="text-xl font-semibold text-dark-gray cursor-pointer">{DICTIONARY[lang].short}</Label>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer">
                                <Checkbox id="week" checked={week} className="border-[#E5E5E5] data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 cursor-pointer"
                                    onCheckedChange={(v: boolean) => {
                                        setWeek(v);
                                        setShort(false);
                                        setLong(false);
                                        if (v) {
                                            setMinDays(5); setMaxDays(7);
                                        } else {
                                            setMinDays(null); setMaxDays(null);
                                        }
                                    }} />
                                <Label htmlFor="week" className="text-xl font-semibold text-dark-gray cursor-pointer">{DICTIONARY[lang].week}</Label>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer">
                                <Checkbox id="long" checked={long} className="border-[#E5E5E5] data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 cursor-pointer"
                                    onCheckedChange={(v: boolean) => {
                                        setLong(v);
                                        setShort(false);
                                        setWeek(false);
                                        if (v) {
                                            setMinDays(7); setMaxDays(30);
                                        } else {
                                            setMinDays(null); setMaxDays(null);
                                        }
                                    }} />
                                <Label htmlFor="long" className="text-xl font-semibold text-dark-gray cursor-pointer">{DICTIONARY[lang].long}</Label>
                            </div>
                        </div>
                    </div>

                    <ScrollBar orientation="horizontal" />
                </ScrollArea>


                {isToursPending ? (
                    <div className="p-10 flex justify-center">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' className="w-25 h-auto">
                            <circle fill='#005A2E' stroke='#005A2E' strokeWidth='21' r='15' cx='40' cy='100'>
                                <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.4'></animate>
                            </circle>
                            <circle fill='#005A2E' stroke='#005A2E' strokeWidth='21' r='15' cx='100' cy='100'>
                                <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='-.2'></animate>
                            </circle>
                            <circle fill='#005A2E' stroke='#005A2E' strokeWidth='21' r='15' cx='160' cy='100'>
                                <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' begin='0'></animate>
                            </circle></svg>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-5 pt-3 max-[1024px]:grid-cols-2 max-[744px]:grid-cols-1">
                        {tours?.results?.map((tour) => (
                            <Card key={tour.id} title={tour.title} price={tour.price} img={tour.image} to={`${tour.id}`} />
                        ))}
                    </div>
                )}

                {totalPages > 1 && (
                    <Pagination className="mt-6">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                    className={page === 1 ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>

                            {pages.map((p) => (
                                <PaginationItem key={p}>
                                    <PaginationLink
                                        isActive={p === page}
                                        onClick={() => setPage(p)}
                                    >
                                        {p}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                    className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                )}
            </div>
        </div>
    )
}