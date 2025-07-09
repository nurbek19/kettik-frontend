import { Link } from "react-router-dom";
import { Button } from "../ui/button"


type CardProps = {
    title: string;
    price: number;
    to: string;
    img?: string;
}

export const Card = ({ title, price, to, img }: CardProps) => {
    return (
        <Link to={to} className="flex flex-col border border-[#E5E5E5] rounded-[20px] overflow-hidden transition-transform hover:scale-105">
            <div className="h-[300px]">
                <img src={img} className="object-cover w-full h-full" alt="tour image" />
            </div>

            <div className="bg-white grow p-5 flex flex-col">
                <p className="text-xl font-semibold grow flex items-end pb-4">{title}</p>

                <Button className="w-full h-auto py-3">
                    {`${price}`}

                    <span>Подробнее</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M8.19177 2.06598C7.78918 1.96856 7.38383 2.21596 7.28642 2.61855C7.189 3.02115 7.43639 3.42649 7.83899 3.52391L8.19177 2.06598ZM14.8856 5.22903C15.2882 5.32645 15.6936 5.07906 15.791 4.67647C15.8884 4.27387 15.641 3.86853 15.2384 3.77111L14.8856 5.22903ZM15.7815 4.71179C15.8984 4.31443 15.6711 3.89751 15.2737 3.78058C14.8764 3.66365 14.4594 3.89099 14.3425 4.28835L15.7815 4.71179ZM12.2959 11.2435C12.179 11.6408 12.4063 12.0578 12.8037 12.1747C13.201 12.2916 13.6179 12.0643 13.7349 11.6669L12.2959 11.2435ZM15.437 5.14959C15.7957 4.94249 15.9186 4.48379 15.7115 4.12507C15.5044 3.76635 15.0457 3.64345 14.687 3.85055L15.437 5.14959ZM2.56266 10.8506C2.20394 11.0577 2.08103 11.5164 2.28814 11.8751C2.49524 12.2338 2.95394 12.3567 3.31266 12.1496L2.56266 10.8506ZM8.01538 2.79495L7.83899 3.52391L14.8856 5.22903L15.062 4.50007L15.2384 3.77111L8.19177 2.06598L8.01538 2.79495ZM15.062 4.50007L14.3425 4.28835L12.2959 11.2435L13.0154 11.4552L13.7349 11.6669L15.7815 4.71179L15.062 4.50007ZM15.062 4.50007L14.687 3.85055L2.56266 10.8506L2.93766 11.5001L3.31266 12.1496L15.437 5.14959L15.062 4.50007Z" fill="white" />
                    </svg>
                </Button>
            </div>
        </Link>
    )
}