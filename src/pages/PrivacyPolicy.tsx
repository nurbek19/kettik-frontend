import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

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
                <div className="text-base text-gray px-25 max-[1024px]:px-0">
                <ReactMarkdown children={data?.[0].text} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
                </div>
            </div>
        </div>
    )
}