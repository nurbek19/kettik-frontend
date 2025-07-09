import { type HomeBannerDto } from "@/api/homePage";


export const BannerSection = ({ image, title, subtitle }: HomeBannerDto) => {
    return (
        <section className="w-full h-[800px] relative bg-center bg-cover max-[744px]:h-[720px]" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-[#262626]/40 bg-opacity-[0.4] flex flex-col justify-end items-center pb-[80px] pt-5 px-5">
                <h1 className="font-sans text-[220px] uppercase text-white tracking-[60px] font-bold pb-[40px] leading-[140px] text-center max-[1300px]:tracking-[30px] max-[1100px]:text-[120px] max-[744px]:text-[65px] max-[744px]:tracking-[10px] max-[744px]:leading-none max-[744px]:pb-6">Kettik</h1>
                <h2 className=" text-white pb-[40px] leading-[50px] text-center max-[1100px]:text-[40px] max-[744px]:text-[32px] max-[744px]:leading-none max-[744px]:pb-6">{title}</h2>
                <p className="text-[20px] text-white text-center max-[1100px]:text-[22px] max-[744px]:text-[18px] max-[744px]:pb-6">{subtitle}</p>
            </div>
        </section>
    )
}