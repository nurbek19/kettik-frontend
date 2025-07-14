import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const FixedButtons = () => {
    const [showButton, setShowButton] = useState(false);

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
            <a href="#" className="fixed bg-[#52C95B] bottom-20 right-[8%] w-[50px] h-[50px] rounded-full flex items-center justify-center z-2 max-[1320px]:right-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M0.469375 10.8684C0.468859 12.7168 0.955609 14.5216 1.88116 16.1125L0.380859 21.5478L5.98673 20.0893C7.53725 20.9269 9.27448 21.3657 11.0399 21.3658H11.0445C16.8724 21.3658 21.6164 16.6603 21.6189 10.8766C21.62 8.07401 20.521 5.43861 18.5243 3.45589C16.528 1.47333 13.873 0.380918 11.0441 0.379639C5.21553 0.379639 0.471867 5.08491 0.469461 10.8684" fill="url(#paint0_linear_736_1746)" />
                    <path d="M0.0919531 10.8649C0.0913516 12.7799 0.595547 14.6493 1.55409 16.2971L0 21.9273L5.80688 20.4165C7.40687 21.2821 9.20829 21.7385 11.0413 21.7392H11.0461C17.083 21.7392 21.9974 16.8644 22 10.8736C22.001 7.97031 20.8625 5.24018 18.7945 3.18642C16.7263 1.13291 13.9763 0.0011938 11.0461 0C5.00809 0 0.0943594 4.87411 0.0919531 10.8649ZM3.55016 16.0133L3.33334 15.6718C2.42189 14.2337 1.94081 12.572 1.9415 10.8656C1.94339 5.88619 6.02748 1.83504 11.0495 1.83504C13.4815 1.83606 15.7671 2.77678 17.4862 4.48357C19.2052 6.19053 20.1511 8.4596 20.1505 10.8729C20.1483 15.8524 16.0641 19.904 11.0461 19.904H11.0425C9.40852 19.9032 7.80605 19.4678 6.40853 18.645L6.07595 18.4493L2.63003 19.3458L3.55016 16.0133Z" fill="url(#paint1_linear_736_1746)" />
                    <path d="M8.30818 6.32267C8.10314 5.87048 7.88735 5.86136 7.69236 5.85343C7.53268 5.8466 7.35015 5.84712 7.16779 5.84712C6.98526 5.84712 6.68869 5.91525 6.43801 6.18684C6.18707 6.45868 5.47998 7.11561 5.47998 8.45173C5.47998 9.78784 6.46079 11.0792 6.59751 11.2606C6.73441 11.4416 8.49097 14.2712 11.2729 15.3598C13.585 16.2645 14.0555 16.0845 14.5573 16.0392C15.0592 15.994 16.1767 15.3824 16.4047 14.7482C16.6329 14.1142 16.6329 13.5707 16.5645 13.4571C16.4961 13.3439 16.3135 13.276 16.0398 13.1402C15.7661 13.0044 14.4204 12.3473 14.1695 12.2567C13.9186 12.1661 13.7362 12.121 13.5536 12.3929C13.3711 12.6644 12.847 13.276 12.6872 13.4571C12.5276 13.6386 12.3679 13.6612 12.0942 13.5254C11.8204 13.3891 10.9389 13.1027 9.89313 12.1776C9.07947 11.4577 8.53016 10.5688 8.37049 10.2968C8.21082 10.0253 8.35339 9.87815 8.49063 9.74282C8.61361 9.62114 8.76443 9.4257 8.90141 9.26718C9.03788 9.10857 9.08343 8.99542 9.17469 8.8143C9.26604 8.63301 9.22032 8.47441 9.152 8.33857C9.08343 8.20274 8.55156 6.85963 8.30818 6.32267Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_736_1746" x1="1062.28" y1="2117.2" x2="1062.28" y2="0.379639" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1FAF38" />
                            <stop offset="1" stopColor="#60D669" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_736_1746" x1="1100" y1="2192.73" x2="1100" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F9F9F9" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
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