import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { CompanyNumbers } from "@/components/shared/CompanyNumbers";

import { aboutUsPageApi } from "@/api/aboutUs";
import { homePageApi } from "@/api/homePage";

import { formatDateRu } from "@/lib/utils";

export const AboutUsSection = () => {
    const { data: digits } = useQuery({
        queryKey: ['about', 'digits'],
        queryFn: aboutUsPageApi.getDigits,
    });

    const { data: historyData } = useQuery({
        queryKey: ['about', 'history'],
        queryFn: aboutUsPageApi.getHistory,
    });

    const { data: images } = useQuery({
        queryKey: ['about', 'images'],
        queryFn: aboutUsPageApi.getImages,
    });

    const { data: reviews } = useQuery({
        queryKey: ['home', 'reviews'],
        queryFn: homePageApi.getReviews,
    });

    const { data: sliderImages } = useQuery({
        queryKey: ['home', 'slider-images'],
        queryFn: homePageApi.getSliderImages,
    });

    if (!digits) {
        return null;
    }

    return (
        <div>
            <div className="max-w-screen-xl mx-auto pt-[120px] pb-[60px] max-[1320px]:px-5 max-[1100px]:py-8">
                <div className="grid grid-cols-2 gap-5 items-center max-[744px]:grid-cols-1">
                    <div className="grid grid-cols-2 gap-5 max-[744px]:order-2">
                        <div className="flex flex-col gap-5">
                            {images?.slice(0, 2)?.map((imgObj) => (
                                <img key={imgObj.id} src={imgObj.image} className="w-full h-[300px] object-cover rounded-3xl" alt="team image" />
                            ))}
                        </div>

                        <div className="flex flex-col gap-5 pt-[160px]">
                            {images?.slice(2, 4)?.map((imgObj) => (
                                <img key={imgObj.id} src={imgObj.image} className="w-full h-[300px] object-cover rounded-3xl" alt="team image" />
                            ))}
                        </div>
                    </div>

                    <div className="max-[744px]:order-1">
                        <h3 className="pb-7 max-[1024px]:text-[36px] max-[744px]:text-[28px] max-[744px]:pb-6">{historyData?.title}</h3>

                        <p className="text-gray pb-6">{historyData?.text}</p>

                        <Link to="about" className="button-gradient inline-flex items-center gap-x-[6px] text-white font-semibold text-base px-12 py-3 max-[744px]:w-full max-[744px]:justify-center">
                            Подробнее о нас

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M8.19177 2.06598C7.78918 1.96856 7.38383 2.21596 7.28642 2.61855C7.189 3.02115 7.43639 3.42649 7.83899 3.52391L8.19177 2.06598ZM14.8856 5.22903C15.2882 5.32645 15.6936 5.07906 15.791 4.67647C15.8884 4.27387 15.641 3.86853 15.2384 3.77111L14.8856 5.22903ZM15.7815 4.71179C15.8984 4.31443 15.6711 3.89751 15.2737 3.78058C14.8764 3.66365 14.4594 3.89099 14.3425 4.28835L15.7815 4.71179ZM12.2959 11.2435C12.179 11.6408 12.4063 12.0578 12.8037 12.1747C13.201 12.2916 13.6179 12.0643 13.7349 11.6669L12.2959 11.2435ZM15.437 5.14959C15.7957 4.94249 15.9186 4.48379 15.7115 4.12507C15.5044 3.76635 15.0457 3.64345 14.687 3.85055L15.437 5.14959ZM2.56266 10.8506C2.20394 11.0577 2.08103 11.5164 2.28814 11.8751C2.49524 12.2338 2.95394 12.3567 3.31266 12.1496L2.56266 10.8506ZM8.01538 2.79495L7.83899 3.52391L14.8856 5.22903L15.062 4.50007L15.2384 3.77111L8.19177 2.06598L8.01538 2.79495ZM15.062 4.50007L14.3425 4.28835L12.2959 11.2435L13.0154 11.4552L13.7349 11.6669L15.7815 4.71179L15.062 4.50007ZM15.062 4.50007L14.687 3.85055L2.56266 10.8506L2.93766 11.5001L3.31266 12.1496L15.437 5.14959L15.062 4.50007Z" fill="white" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="pt-[120px] max-[1100px]:pt-8">
                    <CompanyNumbers digits={digits} />
                </div>
            </div>

            <div className="pt-15 pb-15 max-[1100px]:py-8">
                <h3 className="text-center pb-7 max-[1024px]:text-[36px] max-[744px]:text-[28px]">Поймай дух путешествия!</h3>

                <div className="">
                    {Boolean(sliderImages?.length) && (
                        <Carousel
                            opts={{
                                align: "center",
                                loop: true
                            }}
                            className="w-full oval before:content-[''] before:absolute before:-left-5 before:-right-5 before:h-[40px] before:bg-white before:z-1 after:content-[''] after:absolute after:-left-5 after:-right-5 after:bottom-0 after:h-[40px] after:bg-white after:z-1"
                        >
                            <CarouselContent className="">
                                {sliderImages?.map((imgObj) => (
                                    <CarouselItem key={imgObj.id} className="max-w-[410px] w-full h-[400px] max-[1024px]:max-w-[300px] max-[1024px]:h-[290px] max-[744px]:max-w-[260px] max-[744px]:h-[250px]">
                                        <img src={imgObj.image} className='w-full h-full object-cover' alt="tour image" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    )}
                </div>
            </div>


            <div className="relative max-w-screen-xl mx-auto pt-15 pb-[120px] max-[1100px]:py-8">
                <h3 className="text-center pb-10  max-[1024px]:text-[36px] max-[744px]:text-[28px]">Отзывы</h3>

                <div className="flex justify-center">
                    <div className="max-w-[1094px] w-full max-[1200px]:max-w-full">
                        <Carousel
                            opts={{
                                // align: "center"
                            }}
                            className="w-full [&>div]:py-2 max-[1200px]:px-12"
                        >
                            <CarouselContent>
                                {reviews?.slice(0, 60).map((review) => (
                                    <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 pl-5 pr-1">
                                        <div className="bg-[#F5F5F5] rounded-sm shadow-md p-5">
                                            <div className="flex items-center gap-3 relative pr-6">
                                                <img
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <h4 className="font-semibold">{review.name}</h4>
                                                    <p className="text-sm text-gray-500">{formatDateRu(review.created_at)}</p>
                                                </div>

                                                <svg className="absolute top-0 right-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <mask id="mask0_811_3524" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="20">
                                                        <path d="M18.5418 8.33301H10.0002V11.8747H14.9168C14.4585 14.1247 12.5418 15.4163 10.0002 15.4163C7.00016 15.4163 4.5835 12.9997 4.5835 9.99967C4.5835 6.99967 7.00016 4.58301 10.0002 4.58301C11.2918 4.58301 12.4585 5.04134 13.3752 5.79134L16.0418 3.12467C14.4168 1.70801 12.3335 0.833008 10.0002 0.833008C4.91683 0.833008 0.833496 4.91634 0.833496 9.99967C0.833496 15.083 4.91683 19.1663 10.0002 19.1663C14.5835 19.1663 18.7502 15.833 18.7502 9.99967C18.7502 9.45801 18.6668 8.87467 18.5418 8.33301Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_811_3524)">
                                                        <path d="M0 15.4163V4.58301L7.08333 9.99967L0 15.4163Z" fill="#FBBC05" />
                                                    </g>
                                                    <mask id="mask1_811_3524" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="20">
                                                        <path d="M18.5418 8.33301H10.0002V11.8747H14.9168C14.4585 14.1247 12.5418 15.4163 10.0002 15.4163C7.00016 15.4163 4.5835 12.9997 4.5835 9.99967C4.5835 6.99967 7.00016 4.58301 10.0002 4.58301C11.2918 4.58301 12.4585 5.04134 13.3752 5.79134L16.0418 3.12467C14.4168 1.70801 12.3335 0.833008 10.0002 0.833008C4.91683 0.833008 0.833496 4.91634 0.833496 9.99967C0.833496 15.083 4.91683 19.1663 10.0002 19.1663C14.5835 19.1663 18.7502 15.833 18.7502 9.99967C18.7502 9.45801 18.6668 8.87467 18.5418 8.33301Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask1_811_3524)">
                                                        <path d="M0 4.58333L7.08333 10L10 7.45833L20 5.83333V0H0V4.58333Z" fill="#EA4335" />
                                                    </g>
                                                    <mask id="mask2_811_3524" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="20">
                                                        <path d="M18.5418 8.33301H10.0002V11.8747H14.9168C14.4585 14.1247 12.5418 15.4163 10.0002 15.4163C7.00016 15.4163 4.5835 12.9997 4.5835 9.99967C4.5835 6.99967 7.00016 4.58301 10.0002 4.58301C11.2918 4.58301 12.4585 5.04134 13.3752 5.79134L16.0418 3.12467C14.4168 1.70801 12.3335 0.833008 10.0002 0.833008C4.91683 0.833008 0.833496 4.91634 0.833496 9.99967C0.833496 15.083 4.91683 19.1663 10.0002 19.1663C14.5835 19.1663 18.7502 15.833 18.7502 9.99967C18.7502 9.45801 18.6668 8.87467 18.5418 8.33301Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask2_811_3524)">
                                                        <path d="M0 15.4167L12.5 5.83333L15.7917 6.25L20 0V20H0V15.4167Z" fill="#34A853" />
                                                    </g>
                                                    <mask id="mask3_811_3524" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="20">
                                                        <path d="M18.5418 8.33301H10.0002V11.8747H14.9168C14.4585 14.1247 12.5418 15.4163 10.0002 15.4163C7.00016 15.4163 4.5835 12.9997 4.5835 9.99967C4.5835 6.99967 7.00016 4.58301 10.0002 4.58301C11.2918 4.58301 12.4585 5.04134 13.3752 5.79134L16.0418 3.12467C14.4168 1.70801 12.3335 0.833008 10.0002 0.833008C4.91683 0.833008 0.833496 4.91634 0.833496 9.99967C0.833496 15.083 4.91683 19.1663 10.0002 19.1663C14.5835 19.1663 18.7502 15.833 18.7502 9.99967C18.7502 9.45801 18.6668 8.87467 18.5418 8.33301Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask3_811_3524)">
                                                        <path d="M20.0003 19.9997L7.08366 9.99967L5.41699 8.74967L20.0003 4.58301V19.9997Z" fill="#4285F4" />
                                                    </g>
                                                </svg>
                                            </div>

                                            <div className="flex gap-1 mt-2 text-yellow-500">
                                                {Array.from({ length: review.rating }).map((_, i) => (
                                                    <span key={i}>★</span>
                                                ))}
                                            </div>

                                            <p className="mt-2 text-gray-700 line-clamp-10">
                                                {review.text}
                                            </p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="max-[1200px]:left-2" />
                            <CarouselNext className="max-[1200px]:right-2" />
                        </Carousel>
                    </div>
                </div>

                <div className="absolute right-0 top-15 max-[1200px]:static max-[1200px]:pt-6 max-[1200px]:flex max-[1200px]:justify-end max-[1200px]:px-5">
                    <a
                        href="https://www.google.com/maps/place/Kettik/@42.8694801,74.6012902,17z/data=!3m1!5s0x389eb7da57b364d7:0x737cc70226bc7ebd!4m8!3m7!1s0x389eb729cbec1e73:0x8e2b13ff36a21043!8m2!3d42.8694801!4d74.6038651!9m1!1b1!16s%2Fg%2F11rfcw2cz_?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        className="button-gradient flex items-center gap-x-[6px] text-white font-semibold text-base px-12 py-3 max-[744px]:w-full max-[744px]:justify-center"
                    >
                        Все отзывы
                    </a>
                </div>
            </div>
        </div>
    );
}