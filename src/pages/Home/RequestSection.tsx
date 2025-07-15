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

import { DICTIONARY } from "@/lib/dictionary";

export const RequestSection = () => {
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

    const lang = localStorage.getItem('lang') ?? 'ru';

    return (
        <div className="relative bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex items-center justify-center w-full h-full pt-[140px] pb-[120px] px-5 request-section-gradient max-[1100px]:py-8">
                <div className="bg-[#262626]/30 max-w-[846px] w-full p-15 backdrop-blur-[10px] rounded-3xl max-[744px]:p-5">
                    <h3 className="text-white max-[1024px]:text-[36px] max-[744px]:text-[28px]">{DICTIONARY[lang].application_title}</h3>
                    <p className="text-white text-xl font-semibold pb-6 max-[744px]:text-lg">{DICTIONARY[lang].application_text}</p>

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
                        <DialogTitle className="text-[40px] font-bold text-[#4CAF50]">{DICTIONARY[lang].application_success}</DialogTitle>
                        <DialogDescription className="text-base text-gray">
                            {DICTIONARY[lang].success_text}
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" className="bg-[#262626] text-white rounded-full px-13 py-3 h-auto">
                                {DICTIONARY[lang].close}
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
                <DialogContent className="max-w-[490px] w-full bg-right-top bg-no-repeat rounded-3xl" style={{ backgroundImage: `url(${close})` }}>
                    <DialogHeader className="pr-[170px]">
                        <DialogTitle className="text-[40px] font-bold text-[#D32F2F]">{DICTIONARY[lang].application_error}</DialogTitle>
                        <DialogDescription className="text-base text-gray">
                            {DICTIONARY[lang].error_text}
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" className="bg-[#262626] text-white rounded-full px-13 py-3 h-auto">
                                {DICTIONARY[lang].close}
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}