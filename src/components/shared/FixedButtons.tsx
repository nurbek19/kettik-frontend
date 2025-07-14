import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import { homePageApi } from "@/api/homePage";

export const FixedButtons = () => {
    const [showButton, setShowButton] = useState(false);

    // const { data } = useQuery({
    //     queryKey: ['home', 'contacts'],
    //     queryFn: homePageApi.getContacts
    // });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <a href="https://t.me/kettikchat" target="_blank" className="fixed bottom-20 right-[8%] z-2 max-[1320px]:right-5">
                <svg className="w-[50px] h-[50px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#039BE5" />
                    <path d="M5.49077 11.7402L17.0608 7.27921C17.5978 7.08521 18.0668 7.41021 17.8928 8.22221L17.8938 8.22121L15.9238 17.5022C15.7778 18.1602 15.3868 18.3202 14.8398 18.0102L11.8398 15.7992L10.3928 17.1932C10.2328 17.3532 10.0978 17.4882 9.78777 17.4882L10.0008 14.4352L15.5608 9.41221C15.8028 9.19921 15.5068 9.07921 15.1878 9.29121L8.31677 13.6172L5.35477 12.6932C4.71177 12.4892 4.69777 12.0502 5.49077 11.7402Z" fill="white" />
                </svg>
            </a>

            {showButton ? (
                <div
                    onClick={scrollToTop}
                    className="button-gradient fixed bottom-5 right-[8%] w-[50px] h-[50px] flex items-center justify-center z-2 max-[1320px]:right-5"
                >
                    <ChevronUp className="w-8 h-8" stroke="#fff" />
                </div>
            ) : null}
        </>
    );
};