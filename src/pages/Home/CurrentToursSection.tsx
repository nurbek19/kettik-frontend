import { Link } from "react-router-dom";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/shared/Card";

import { type ToursDto } from "@/api/toursApi";
import { DICTIONARY } from "@/lib/dictionary";


export const CurrentToursSection = ({ tours }: { tours: ToursDto }) => {
    const lang = localStorage.getItem('lang') ?? 'en';

    return (
        <div className="max-w-[1320px] mx-auto pt-[120px] pb-[90px] max-[1100px]:py-8">
            <div className="relative">
                <h3 className="text-center max-[1024px]:text-[36px] max-[744px]:text-[28px] px-5">{DICTIONARY[lang].current_tours}</h3>

                <ScrollArea className="w-full [&>div]:p-5">
                    <div className="grid grid-cols-4 gap-5 w-[1280px]">
                        {tours?.results?.slice(0, 4).map((tour) => (
                            <Card key={tour.id} title={tour.title} price={tour.price} currency={tour.currency} img={tour.image} to={`tours/${tour.id}`} />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <div className="absolute right-5 top-3 max-[1200px]:static max-[1200px]:flex max-[1200px]:justify-end max-[1200px]:px-5  max-[744px]:w-full">
                    <Link to="tours" className="button-gradient flex items-center gap-x-[6px] text-white font-semibold text-base px-12 py-3 max-[744px]:w-full max-[744px]:justify-center">
                        {DICTIONARY[lang].all_tours}

                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M3.24141 9.36011C2.24889 9.36011 1.44141 10.1676 1.44141 11.1601C1.44141 12.1526 2.24889 12.9601 3.24141 12.9601C4.23393 12.9601 5.04141 12.1526 5.04141 11.1601C5.04141 10.1676 4.23393 9.36011 3.24141 9.36011ZM3.24141 12.2401C2.64589 12.2401 2.16141 11.7556 2.16141 11.1601C2.16141 10.5646 2.64589 10.0801 3.24141 10.0801C3.83692 10.0801 4.32141 10.5646 4.32141 11.1601C4.32141 11.7556 3.83692 12.2401 3.24141 12.2401Z" fill="white" />
                            <path d="M3.24 7.91994C1.45346 7.91994 0 9.3734 0 11.1599C0 14.1321 2.83806 17.7138 2.95888 17.8648C3.10684 18.0498 3.38605 18.0422 3.52634 17.8581C3.64694 17.6998 6.48 13.9494 6.48 11.1599C6.48 9.3734 5.02654 7.91994 3.24 7.91994ZM3.23392 17.0329C2.51942 16.0489 0.72 13.3528 0.72 11.1599C0.72 9.77041 1.85047 8.63994 3.24 8.63994C4.62953 8.63994 5.76 9.77041 5.76 11.1599C5.76 13.2181 3.94459 16.0164 3.23392 17.0329ZM16.56 3.23994C16.56 2.24742 15.7525 1.43994 14.76 1.43994C13.7675 1.43994 12.96 2.24742 12.96 3.23994C12.96 4.23246 13.7675 5.03994 14.76 5.03994C15.7525 5.03994 16.56 4.23246 16.56 3.23994ZM13.68 3.23994C13.68 2.64443 14.1645 2.15994 14.76 2.15994C15.3555 2.15994 15.84 2.64443 15.84 3.23994C15.84 3.83545 15.3555 4.31994 14.76 4.31994C14.1645 4.31994 13.68 3.83545 13.68 3.23994Z" fill="white" />
                            <path d="M15.0467 9.9382C15.1673 9.77987 18.0003 6.02942 18.0003 3.24C18.0003 1.45346 16.5468 0 14.7603 0C12.9738 0 11.5203 1.45346 11.5203 3.24C11.5203 6.21212 14.3584 9.79387 14.4792 9.94489C14.6271 10.1299 14.9064 10.1223 15.0467 9.9382ZM14.7603 0.72C16.1498 0.72 17.2803 1.85047 17.2803 3.24C17.2803 5.29819 15.4649 8.09647 14.7542 9.11297C14.0397 8.12898 12.2403 5.43287 12.2403 3.24C12.2403 1.85047 13.3708 0.72 14.7603 0.72ZM15.6603 13.32H9.54031C8.64704 13.32 7.92031 12.5933 7.92031 11.7C7.92031 10.8067 8.64704 10.08 9.54031 10.08H13.3203C13.5191 10.08 13.6803 9.91879 13.6803 9.72C13.6803 9.52121 13.5191 9.36 13.3203 9.36H9.54031C8.25004 9.36 7.20031 10.4097 7.20031 11.7C7.20031 12.9903 8.25004 14.04 9.54031 14.04H15.6603C16.5536 14.04 17.2803 14.7667 17.2803 15.66C17.2803 16.5533 16.5536 17.28 15.6603 17.28H4.68031C4.48148 17.28 4.32031 17.4412 4.32031 17.64C4.32031 17.8388 4.48148 18 4.68031 18H15.6603C16.9506 18 18.0003 16.9503 18.0003 15.66C18.0003 14.3697 16.9506 13.32 15.6603 13.32Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}