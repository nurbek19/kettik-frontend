import { useQuery } from "@tanstack/react-query";

import { BannerSection } from "./BannerSection";
import { CurrentToursSection } from "./CurrentToursSection";
import { RequestSection } from "./RequestSection";
import { AboutUsSection } from "./AboutUsSection";
import { Loader } from "@/components/shared/Loader";

import { homePageApi } from "@/api/homePage";
import { toursApi } from "@/api/toursApi";


export const Home = () => {
    const { data: banner, isPending: isBannerPending } = useQuery({
        queryKey: ['home', 'banner'],
        queryFn: homePageApi.getBanner
    });

    const { data: tours, isPending: isToursPending } = useQuery({
        queryKey: ['tours', 'list'],
        queryFn: toursApi.getTours,
    });

    if (isBannerPending || isToursPending) {
        return (
            <Loader />
        );
    }

    if (!banner || !tours) {
        return null;
    }

    return (
        <div>
            <BannerSection image={banner.image} title={banner.title} subtitle={banner.subtitle} />
            <CurrentToursSection tours={tours} />
            <RequestSection />
            <AboutUsSection />
        </div>
    )
}