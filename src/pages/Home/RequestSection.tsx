import { RequestForm } from "../../components/shared/RequestForm";
import bg from '../../assets/request-bg.png';

export const RequestSection = () => {
    return (
        <div className="relative">
            <img src={bg} className="w-full h-full object-cover object-center" alt="background image" />
            <div className="absolute left-0 top-0 flex items-center justify-center w-full h-full request-section-gradient">
                <div className="bg-[#262626]/30 max-w-[846px] w-full p-15 backdrop-blur-[10px] rounded-3xl">
                    <h3 className="text-white">Готовы к приключению?</h3>
                    <p className="text-white text-xl font-semibold pb-6">Первый шаг к новому приключению — просто оставьте заявку!</p>

                    <RequestForm textColor="light" />
                </div>
            </div>


        </div>
    );
}