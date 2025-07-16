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

import { homePageApi } from "@/api/homePage";

import { DICTIONARY } from "@/lib/dictionary";

export const RequestForm = (
    { textColor = 'light', setIsSuccessDialogOpen, setIsErrorDialogOpen }: { textColor: 'light' | 'dark'; setIsSuccessDialogOpen: () => void; setIsErrorDialogOpen: () => void; }
) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [agreement, setAgreement] = useState(false);

    const lang = localStorage.getItem('lang') ?? 'en';

    const color = textColor === 'light' ? 'text-white' : 'text-gray';

    const sendApplicationMutation = useMutation({
        mutationFn: homePageApi.sendApplication,
        onSuccess: () => {
            setIsSuccessDialogOpen();
            setName('');
            setEmail('');
            setPhone('');
            setComment('');
            setAgreement(false);
        },
        onError: () => {
            setIsErrorDialogOpen();
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
        <>
            <div>
                <div className="grid grid-cols-2 gap-5 max-[744px]:grid-cols-1">
                    <div className="flex flex-col gap-6">
                        <div>
                            <Label htmlFor="name" className={`${color} font-semibold text-base pb-[6px]`}>{DICTIONARY[lang].name}*</Label>
                            <Input type="text" id="name" required className="text-base bg-white p-[14px] h-auto" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div>
                            <Label htmlFor="email" className={`${color} font-semibold text-base pb-[6px]`}>Email*</Label>
                            <Input type="email" id="email" required className="text-base bg-white p-[14px] h-auto" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <Label htmlFor="phone" className={`${color} font-semibold text-base pb-[6px]`}>{DICTIONARY[lang].phone_label}*</Label>

                            <PhoneInput
                                country={'us'}
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
                            <Label htmlFor="comment" className={`${color} font-semibold text-base pb-[6px]`}>{DICTIONARY[lang].comments}</Label>
                            <Textarea id="comment" className="text-base bg-white p-[14px] h-auto grow resize-none" maxLength={500} value={comment} onChange={(e) => setComment(e.target.value)} />
                        </div>

                        <div className="flex gap-3">
                            <Checkbox id="agreement" required checked={agreement} onCheckedChange={(v: boolean) => setAgreement(v)} />
                            <Label htmlFor="agreement" className={`text-sm ${color}`}>{DICTIONARY[lang].privacy}</Label>
                        </div>

                        <Button variant="secondary" className={`text-white text-base font-semibold py-3 h-auto cursor-pointer rounded-full disabled:opacity-100 ${(!name || !email || !phone || !agreement) ? '!bg-[#999999]' : 'button-gradient'}`} disabled={!name || !email || !phone || !agreement} onClick={requestHandler}>
                            {sendApplicationMutation.isPending ? DICTIONARY[lang].loading : DICTIONARY[lang].send}
                        </Button>
                    </div>
                </div>
            </div>
        </>

    );
}