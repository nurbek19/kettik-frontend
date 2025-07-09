import type { ReactNode } from "react";

type Props = {
    img: any;
    title: string;
    text?: string;
    children?: ReactNode;
}


export const Banner = ({ img, title, text, children }: Props) => {

    return (
        <div className="h-[600px] bg-center bg-cover max-[1024px]:h-[550px] max-[744px]:h-[500px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="w-full h-full banner-gradient flex flex-col justify-end items-center p-5">
                <h2 className="text-white pb-3 text-center max-[1024px]:text-[40px] max-[744px]:text-[28px]">{title}</h2>

                {text && (<p className="text-white text-xl font-semibold pb-4 text-center max-[744px]:text-lg">{text}</p>)}

                {children}
            </div>
        </div>
    )
}