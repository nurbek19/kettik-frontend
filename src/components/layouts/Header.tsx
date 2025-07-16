import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetContent,
    SheetClose,
} from "@/components/ui/sheet";
import { RequestForm } from '../shared/RequestForm';

import { Menu } from "lucide-react";

import { DICTIONARY } from '@/lib/dictionary';

import logo from '../../assets/logo.svg';
import check from '../../assets/check.png';
import close from '../../assets/x-icon.png';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isChange, setIsChange] = useState(false);

    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

    const lang = localStorage.getItem('lang') ?? 'en';

    useEffect(() => {
        const language = localStorage.getItem('lang');

        if (language === 'ru') {
            setIsChange(true);
        } else if (language === 'en') {
            setIsChange(false);
        }
    }, []);

    const changeLanguage = (checked: boolean) => {
        setIsChange(checked);

        if (checked) {
            localStorage.setItem("lang", "ru");
        } else {
            localStorage.setItem("lang", "en");
        }

        window.location.reload();
    };

    return (
        <header className='header fixed top-0 z-3 max-w-[1280px] w-full max-[1300px]:pt-[18px] max-[1300px]:px-5'>
            <div className='header-shadow flex justify-between items-center gap-5 mx-auto bg-white rounded-full w-full px-[20px] py-[14px] max-[744px]:py-2 max-[744px]:px-3'>
                <div className='max-[1200px]:grow'>
                    <Link to="/">
                        <img src={logo} className='w-[130px] max-[1100px]:w-[100px] max-[744px]:w-[80px]' alt="logotype" />
                    </Link>
                </div>

                <div className='flex gap-x-[40px] max-[1200px]:hidden'>
                    <Link to="tours" className='text-xl font-semibold text-black hover:underline'>{DICTIONARY[lang].tours}</Link>
                    <Link to="about" className='text-xl font-semibold text-black hover:underline'>{DICTIONARY[lang].about}</Link>
                    <Link to="kyrgyzstan" className='text-xl font-semibold text-black hover:underline'>{DICTIONARY[lang].kyrgyzstan}</Link>
                    <Link to="/gallery" className='text-xl font-semibold text-black hover:underline'>{DICTIONARY[lang].gallery}</Link>
                    <a href='#footer' className='text-xl font-semibold text-black hover:underline'>{DICTIONARY[lang].contacts}</a>
                </div>

                <Switch checked={isChange} onCheckedChange={(v: boolean) => changeLanguage(v)} />

                <Button className='py-3 px-12 h-auto cursor-pointer max-[744px]:hidden' onClick={() => setIsOpen(true)}>{DICTIONARY[lang].application}</Button>

                <div className="max-[1200px]:block min-[1200px]:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className='rounded-full w-12 h-12 bg-green max-[744px]:w-10 max-[744px]:h-10'>
                                <Menu stroke='#fff' size={36} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="p-8 flex flex-col gap-6">

                            <SheetHeader className='p-0'>
                                <SheetTitle />
                                <SheetDescription />
                            </SheetHeader>
                            <SheetClose asChild>
                                <Link
                                    to="/tours"
                                    className='text-lg font-semibold'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {DICTIONARY[lang].tours}
                                </Link>
                            </SheetClose>

                            <SheetClose asChild>
                                <Link
                                    to="/about"
                                    className='text-lg font-semibold'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {DICTIONARY[lang].about}
                                </Link>
                            </SheetClose>

                            <SheetClose asChild>
                                <Link
                                    to="/kyrgyzstan"
                                    className='text-lg font-semibold'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {DICTIONARY[lang].kyrgyzstan}
                                </Link>
                            </SheetClose>

                            <SheetClose asChild>
                                <Link
                                    to="/gallery"
                                    className='text-lg font-semibold'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {DICTIONARY[lang].gallery}
                                </Link>
                            </SheetClose>

                            <SheetClose asChild>
                                <a
                                    href="#footer"
                                    className='text-lg font-semibold'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {DICTIONARY[lang].contacts}
                                </a>
                            </SheetClose>

                            <Button
                                className='py-3 px-6 h-auto mt-4'
                                onClick={() => {
                                    setIsOpen(true);
                                }}
                            >
                                {DICTIONARY[lang].application}
                            </Button>
                        </SheetContent>
                    </Sheet>
                </div>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="!max-w-[846px] w-full p-15 rounded-3xl max-[744px]:p-5 max-[744px]:h-full max-[744px]:overflow-auto max-[744px]:rounded-none">
                        <DialogHeader className="">
                            <DialogTitle className="text-[40px] font-bold max-[1024px]:text-[36px] max-[744px]:text-[28px]">{DICTIONARY[lang].application_title}</DialogTitle>
                            <DialogDescription className="text-gray text-xl font-semibold pb-6 max-[744px]:text-lg">
                                {DICTIONARY[lang].application_text}
                            </DialogDescription>
                        </DialogHeader>
                        <RequestForm
                            textColor='dark'
                            setIsErrorDialogOpen={() => { setIsErrorDialogOpen(true); setIsOpen(false); }}
                            setIsSuccessDialogOpen={() => { setIsSuccessDialogOpen(true); setIsOpen(false); }}
                        />
                    </DialogContent>
                </Dialog>

                <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
                    <DialogContent className="max-w-[490px] w-full bg-right-top bg-no-repeat rounded-3xl max-[744px]:bg-size-[300px_auto] max-[744px]:bg-right-center" style={{ backgroundImage: `url(${check})` }}>
                        <DialogHeader className="text-left pr-[170px] max-[744px]:pr-[30%]">
                            <DialogTitle className="text-[40px] font-bold text-[#4CAF50] max-[744px]:text-[28px]">{DICTIONARY[lang].application_success}</DialogTitle>
                            <DialogDescription className="text-base text-gray">
                                {DICTIONARY[lang].success_text}
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary" className="bg-[#262626] text-white rounded-full px-13 py-3 max-[]">
                                    {DICTIONARY[lang].close}
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Dialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
                    <DialogContent className="max-w-[490px] w-full bg-right-top bg-no-repeat rounded-3xl max-[744px]:bg-size-[300px_auto] max-[744px]:bg-right-center" style={{ backgroundImage: `url(${close})` }}>
                        <DialogHeader className="text-left pr-[170px] max-[744px]:pr-[30%]">
                            <DialogTitle className="text-[40px] font-bold text-[#D32F2F] max-[744px]:text-[28px]">{DICTIONARY[lang].application_error}</DialogTitle>
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
        </header>
    )
}