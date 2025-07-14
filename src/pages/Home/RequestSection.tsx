import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";

import { RequestForm } from "../../components/shared/RequestForm";
import bg from '../../assets/request-section.jpeg';
import check from '../../assets/check.png';
import close from '../../assets/x-icon.png';

export const RequestSection = () => {
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

    return (
        <div className="relative bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex items-center justify-center w-full h-full pt-[140px] pb-[120px] px-5 request-section-gradient max-[1100px]:py-8">
                <div className="bg-[#262626]/30 max-w-[846px] w-full p-15 backdrop-blur-[10px] rounded-3xl max-[744px]:p-5">
                    <h3 className="text-white max-[1024px]:text-[36px] max-[744px]:text-[28px]">Готовы к приключению?</h3>
                    <p className="text-white text-xl font-semibold pb-6 max-[744px]:text-lg">Первый шаг к новому приключению — просто оставьте заявку!</p>

                    <RequestForm
                        textColor="light"
                        setIsErrorDialogOpen={() => { setIsErrorDialogOpen(true); }}
                        setIsSuccessDialogOpen={() => { setIsSuccessDialogOpen(true); }}
                    />
                </div>
            </div>

            <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
                <DialogContent className="max-w-[490px] w-full bg-right-top bg-no-repeat rounded-3xl" style={{ backgroundImage: `url(${check})` }}>
                    <DialogHeader className="pr-[170px]">
                        <DialogTitle className="text-[40px] font-bold text-[#4CAF50]">Заявка отправлена!</DialogTitle>
                        <DialogDescription className="text-base text-gray">
                            Ваш запрос успешно отправлен. Спасибо! Мы скоро свяжемся с вами.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" className="bg-[#262626] text-white rounded-full px-13 py-3 h-auto">
                                Закрыть
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
                <DialogContent className="max-w-[490px] w-full bg-right-top bg-no-repeat rounded-3xl" style={{ backgroundImage: `url(${close})` }}>
                    <DialogHeader className="pr-[170px]">
                        <DialogTitle className="text-[40px] font-bold text-[#D32F2F]">Ошибка отправки!</DialogTitle>
                        <DialogDescription className="text-base text-gray">
                            Что-то пошло не так. Пожалуйста попробуйте ещё раз или свяжитесь с поддержкой.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" className="bg-[#262626] text-white rounded-full px-13 py-3 h-auto">
                                Закрыть
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}