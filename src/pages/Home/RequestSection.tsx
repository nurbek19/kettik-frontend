import { RequestForm } from "../../components/shared/RequestForm";
import bg from '../../assets/request-bg.png';

export const RequestSection = () => {
    return (
        <div className="relative bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex items-center justify-center w-full h-full pt-[140px] pb-[120px] px-5 request-section-gradient max-[1100px]:py-8">
                <div className="bg-[#262626]/30 max-w-[846px] w-full p-15 backdrop-blur-[10px] rounded-3xl max-[744px]:p-5">
                    <h3 className="text-white max-[1024px]:text-[36px] max-[744px]:text-[28px]">Готовы к приключению?</h3>
                    <p className="text-white text-xl font-semibold pb-6 max-[744px]:text-lg">Первый шаг к новому приключению — просто оставьте заявку!</p>

                    <RequestForm textColor="light" />
                </div>
            </div>


        </div>
    );
}