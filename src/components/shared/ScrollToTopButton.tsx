import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTopButton = () => {
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

    return showButton ? (
        <div
            onClick={scrollToTop}
            className="button-gradient fixed bottom-5 right-[15%] w-[50px] h-[50px] flex items-center justify-center"
        >
            <ChevronUp className="w-8 h-8" stroke="#fff" />
        </div>
    ) : null;
};