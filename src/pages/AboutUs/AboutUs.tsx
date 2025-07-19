import { Banner } from "@/components/shared/Banner";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"

import { useQuery } from "@tanstack/react-query";

import Breadcrumbs from "@/components/shared/BreadCrumbs";
import { CompanyNumbers } from "@/components/shared/CompanyNumbers";
import { Loader } from "@/components/shared/Loader";

import { aboutUsPageApi } from "@/api/aboutUs";
import { homePageApi } from "@/api/homePage";

import { DICTIONARY } from "@/lib/dictionary";


export const AboutUs = () => {
    const lang = localStorage.getItem('lang') ?? 'en';

    const { data: bannerData, isPending: isBannerPending } = useQuery({
        queryKey: ['about', 'banner'],
        queryFn: aboutUsPageApi.getBanner,
    });

    const { data: historyData, isPending: isHistoryPending } = useQuery({
        queryKey: ['about', 'history'],
        queryFn: aboutUsPageApi.getHistory,
    });

    const { data: images } = useQuery({
        queryKey: ['about', 'images'],
        queryFn: aboutUsPageApi.getImages,
    });

    const { data: digits } = useQuery({
        queryKey: ['about', 'digits'],
        queryFn: aboutUsPageApi.getDigits,
    });

    const { data: team } = useQuery({
        queryKey: ['about', 'teams'],
        queryFn: aboutUsPageApi.getTeams,
    });

    const { data: contacts } = useQuery({
        queryKey: ['home', 'contacts'],
        queryFn: homePageApi.getContacts
    });

    if (isBannerPending || isHistoryPending) {
        return (
            <Loader />
        )
    }

    if (!bannerData || !historyData || !digits) {
        return null;
    }

    return (
        <div>
            <Banner
                img={bannerData.image}
                title={bannerData.title}
                text={bannerData.subtitle}>
                <a href={contacts?.whatsapp} target='_blank' className="button-gradient inline-flex items-center gap-x-[6px] text-white font-semibold text-base px-12 py-3 max-[744px]:w-full max-[744px]:justify-center">
                    {DICTIONARY[lang].contact}

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="!w-6 !h-6">
                        <path d="M18.2071 13.7071L20.8552 16.3552C21.2113 16.7113 21.2113 17.2887 20.8552 17.6448C18.93 19.57 15.8821 19.7866 13.704 18.153L12.1286 16.9714C10.385 15.6638 8.83622 14.115 7.52857 12.3714L6.34701 10.796C4.71341 8.61788 4.93001 5.56999 6.85523 3.64477C7.21133 3.28867 7.78867 3.28867 8.14477 3.64477L10.7929 6.29289C11.1834 6.68342 11.1834 7.31658 10.7929 7.70711L9.77175 8.72825C9.60946 8.89054 9.56923 9.13846 9.67187 9.34373C10.8585 11.7171 12.7829 13.6415 15.1563 14.8281C15.3615 14.9308 15.6095 14.8905 15.7717 14.7283L16.7929 13.7071C17.1834 13.3166 17.8166 13.3166 18.2071 13.7071Z" stroke="white" />
                    </svg>
                </a>
            </Banner>

            <div className="max-w-screen-xl mx-auto pt-[32px] pb-[60px] max-[1320px]:px-5 max-[744px]:pb-8">
                <div>
                    <Breadcrumbs />
                </div>

                <div className="pt-10 pb-8 px-[100px] max-[1024px]:px-0 max-[744px]:py-8">
                    <h3 className="text-center pb-6 max-[1024px]:text-[36px] max-[744px]:text-[28px] max-[744px]:pb-4">{historyData.title}</h3>

                    <p className="text-base text-gray pb-6 max-[744px]:pb-0">{historyData.text}</p>
                </div>

                <div className="pb-[100px] max-[744px]:pb-8">
                    <div className="grid grid-cols-[59%_39.5%] gap-5 pb-5 max-[744px]:grid-cols-1">
                        {images?.slice(0, 2)?.map((imgObj) => (
                            <img key={imgObj.id} src={imgObj.image} loading="lazy" className="w-full h-100 object-cover rounded-3xl" alt="team image" />
                        ))}
                    </div>

                    <div className="grid grid-cols-[39.5%_59%] gap-5 max-[744px]:grid-cols-1">
                        {images?.slice(2, 4)?.map((imgObj) => (
                            <img key={imgObj.id} src={imgObj.image} loading="lazy" className="w-full h-100 object-cover rounded-3xl" alt="team image" />
                        ))}
                    </div>
                </div>

                <div>
                    <CompanyNumbers digits={digits} />
                </div>
            </div>

            <div className="pt-[60px] pb-[120px] max-[744px]:pb-18 max-[744px]:pt-0">
                <h3 className="text-center pb-8 max-[1024px]:text-[36px] max-[744px]:text-[28px]">{DICTIONARY[lang].team}</h3>

                <div>
                    <Carousel
                        opts={{
                            align: "center",
                            loop: true
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {team?.map((member) => (
                                <CarouselItem key={member.id} className="max-w-[570px] w-full max-[744px]:max-w-[270px]">
                                    <div className="bg-[#F5F5F5] h-full p-5 border-[#E5E5E5] border-2 rounded-3xl">
                                        <div className="flex items-center gap-4 pb-5 max-[744px]:flex-col max-[744px]:pb-2">
                                            <img src={member.image} className="w-[160px] h-[160px] rounded-full object-cover max-[744px]:w-[120px] max-[744px]:h-[120px]" alt="person image" />

                                            <div>
                                                <p className="text-2xl font-semibold max-[744px]:text-xl">{member.name}</p>
                                                <span className="font-semibold max-[744px]:text-sm">{member.duty}</span>
                                            </div>
                                        </div>

                                        <p className="text-base text-gray">{member.text}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="left-[48%] bottom-0 translate-none top-[104%] z-2 border-none bg-none hover:!bg-none shadow-none max-[1330px]:left-[calc(50%-30px)]" />
                        <CarouselNext className="right-[48%] bottom-0 translate-none top-[104%] z-2 border-none bg-none hover:!bg-none shadow-none max-[1330px]:right-[calc(50%-30px)]" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}