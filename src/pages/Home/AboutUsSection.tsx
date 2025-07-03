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

import banner from '../../assets/image.png';


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

    if (!digits) {
        return null;
    }

    return (
        <div>
            <div className="max-w-screen-xl mx-auto pt-[120px] pb-[60px]">
                <div className="grid grid-cols-2 gap-5 items-center">
                    <div className="grid grid-cols-2 gap-5">
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

                    <div>
                        <h3 className="pb-7">{historyData?.title}</h3>

                        <p className="text-gray pb-6">{historyData?.text}</p>

                        <Link to="about" className="button-gradient inline-flex items-center gap-x-[6px] text-white font-semibold text-base px-12 py-3">
                            Подробнее о нас

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M8.19177 2.06598C7.78918 1.96856 7.38383 2.21596 7.28642 2.61855C7.189 3.02115 7.43639 3.42649 7.83899 3.52391L8.19177 2.06598ZM14.8856 5.22903C15.2882 5.32645 15.6936 5.07906 15.791 4.67647C15.8884 4.27387 15.641 3.86853 15.2384 3.77111L14.8856 5.22903ZM15.7815 4.71179C15.8984 4.31443 15.6711 3.89751 15.2737 3.78058C14.8764 3.66365 14.4594 3.89099 14.3425 4.28835L15.7815 4.71179ZM12.2959 11.2435C12.179 11.6408 12.4063 12.0578 12.8037 12.1747C13.201 12.2916 13.6179 12.0643 13.7349 11.6669L12.2959 11.2435ZM15.437 5.14959C15.7957 4.94249 15.9186 4.48379 15.7115 4.12507C15.5044 3.76635 15.0457 3.64345 14.687 3.85055L15.437 5.14959ZM2.56266 10.8506C2.20394 11.0577 2.08103 11.5164 2.28814 11.8751C2.49524 12.2338 2.95394 12.3567 3.31266 12.1496L2.56266 10.8506ZM8.01538 2.79495L7.83899 3.52391L14.8856 5.22903L15.062 4.50007L15.2384 3.77111L8.19177 2.06598L8.01538 2.79495ZM15.062 4.50007L14.3425 4.28835L12.2959 11.2435L13.0154 11.4552L13.7349 11.6669L15.7815 4.71179L15.062 4.50007ZM15.062 4.50007L14.687 3.85055L2.56266 10.8506L2.93766 11.5001L3.31266 12.1496L15.437 5.14959L15.062 4.50007Z" fill="white" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="pt-[120px]">
                    <CompanyNumbers digits={digits} />
                </div>
            </div>

            <div className="pt-15 pb-15">
                <h3 className="text-center pb-7">Поймай дух путешествия!</h3>

                <div className="">
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <CarouselItem key={index} className="max-w-[410px] w-full h-[400px]">
                                    <img src={banner} className='w-full h-full object-cover' alt="tour image" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>


            <div className="max-w-screen-xl mx-auto pt-15 pb-[120px]">
                <h3 className="text-center pb-10">Отзывы</h3>

                <div className="flex justify-center">
                    <div>
                        <Carousel
                            opts={{
                                // align: "center"
                            }}
                            className="w-[1090px]"
                        >
                            <CarouselContent className="">
                                {reviews?.slice(0, 20).map((review) => (
                                    <CarouselItem key={review.id} className="max-w-[370px] w-full pl-5">
                                        <div className="bg-[#F5F5F5] rounded-sm shadow-md p-5">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <h4 className="font-semibold">{review.name}</h4>
                                                    <p className="text-sm text-gray-500">{formatDateRu(review.created_at)}</p>
                                                </div>
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

                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}