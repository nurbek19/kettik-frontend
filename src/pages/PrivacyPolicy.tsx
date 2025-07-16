import { useQuery } from "@tanstack/react-query";

import { Banner } from "@/components/shared/Banner";

import { aboutUsPageApi } from "@/api/aboutUs";
import { DICTIONARY } from "@/lib/dictionary";
import privacyBg from '../assets/privacy.jpeg';
import { Loader } from "@/components/shared/Loader";


export const PrivacyPolicy = () => {
    const lang = localStorage.getItem('lang') ?? 'en';

    const { data, isPending } = useQuery({
        queryKey: ['about', 'privacy'],
        queryFn: aboutUsPageApi.getPrivacy,
    });

    if (isPending) {
        return (
            <Loader />
        )
    }

    return (
        <div>
            <Banner title={DICTIONARY[lang].privacy_title} img={privacyBg} />

            <div className="max-w-screen-xl mx-auto py-[60px] max-[1320px]:px-5 max-[744px]:py-8">
                <p className="text-base text-gray px-25 max-[1024px]:px-0">{data?.text}</p>
            </div>
        </div>
    )
}