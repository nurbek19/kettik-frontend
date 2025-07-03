import { type HomeBannerDto } from "@/api/homePage";


export const BannerSection = ({ image, title, subtitle }: HomeBannerDto) => {
    return (
        <section className="w-full h-[800px] relative bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-[#262626]/40 bg-opacity-[0.4] flex flex-col justify-end items-center pb-[80px]">
                <h1 className="font-sans text-[220px] uppercase text-white tracking-[60px] font-bold pb-[40px] leading-[140px]">Kettik</h1>
                <h2 className=" text-white pb-[40px] leading-[50px]">{title}</h2>
                <p className="text-[20px] text-white ">{subtitle}</p>
            </div>
        </section>
    )
}