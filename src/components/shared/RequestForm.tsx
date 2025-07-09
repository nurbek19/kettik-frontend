import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import { useMutation } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import 'react-phone-input-2/lib/plain.css';

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { homePageApi } from "@/api/homePage";

import check from '../../assets/check.png';
import close from '../../assets/x-icon.png';

export const RequestForm = ({ textColor = 'light' }: { textColor: 'light' | 'dark' }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [agreement, setAgreement] = useState(false);

    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

    const color = textColor === 'light' ? 'text-white' : 'text-gray';

    const sendApplicationMutation = useMutation({
        mutationFn: homePageApi.sendApplication,
        onSuccess: () => {
            setIsSuccessDialogOpen(true);
            setName('');
            setEmail('');
            setPhone('');
            setComment('');
            setAgreement(false);
        },
        onError: () => {
            setIsErrorDialogOpen(true);
        },
    });


    const requestHandler = () => {
        if (!name || !email || !phone || !agreement) {
            alert('Заполните все данные');
        }

        console.log(name, email, phone, comment, agreement);
        sendApplicationMutation.mutate({
            name,
            email,
            phone: `+${phone}`,
            comment
        });
    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-5 max-[744px]:grid-cols-1">
                <div className="flex flex-col gap-6">
                    <div>
                        <Label htmlFor="name" className={`${color} font-semibold text-base pb-[6px]`}>Имя*</Label>
                        <Input type="text" id="name" required className="text-base bg-white p-[14px] h-auto" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <Label htmlFor="email" className={`${color} font-semibold text-base pb-[6px]`}>Email*</Label>
                        <Input type="email" id="email" required className="text-base bg-white p-[14px] h-auto" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <Label htmlFor="phone" className={`${color} font-semibold text-base pb-[6px]`}>Введите номер телефона*</Label>

                        <PhoneInput
                            country={'kg'}
                            enableSearch
                            inputClass={cn(
                                "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                                "bg-white font-sans !p-[14px] !h-auto !pl-12 !w-full"
                            )}
                            containerClass="!w-full"
                            buttonClass="!bg-transparent !border-0 !rounded-0"
                            value={phone}
                            onChange={setPhone}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="grow flex flex-col">
                        <Label htmlFor="comment" className={`${color} font-semibold text-base pb-[6px]`}>Оставить комментарий</Label>
                        <Textarea id="comment" className="text-base bg-white p-[14px] h-auto grow" value={comment} onChange={(e) => setComment(e.target.value)} />
                    </div>

                    <div className="flex gap-3">
                        <Checkbox id="agreement" required checked={agreement} onCheckedChange={(v: boolean) => setAgreement(v)} />
                        <Label htmlFor="agreement" className={`text-sm ${color}`}>Я даю согласие на обработку персональных данных</Label>
                    </div>

                    <Button className="!bg-none !bg-[#999999] py-3 h-auto cursor-pointer" onClick={requestHandler}>
                        {sendApplicationMutation.isPending ? 'Загрузка' : 'Отправить'}
                    </Button>
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