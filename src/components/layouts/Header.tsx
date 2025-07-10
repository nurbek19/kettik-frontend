import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
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

import logo from '../../assets/logo.png';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='header fixed top-0 z-1 max-w-[1280px] w-full max-[1300px]:pt-[18px] max-[1300px]:px-5'>
            <div className='header-shadow flex justify-between items-center gap-5 mx-auto bg-white rounded-full w-full px-[20px] py-[14px] max-[744px]:py-2 max-[744px]:px-3'>
                <div className='max-[1200px]:grow'>
                    <Link to="/">
                        <img src={logo} className='w-[130px] max-[1100px]:w-[100px] max-[744px]:w-[80px]' alt="logotype" />
                    </Link>
                </div>

                <div className='flex gap-x-[40px] max-[1200px]:hidden'>
                    <Link to="tours" className='text-xl font-semibold text-black'>Туры</Link>
                    <Link to="about" className='text-xl font-semibold text-black'>О нас</Link>
                    <Link to="kyrgyzstan" className='text-xl font-semibold text-black'>Кыргызстан</Link>
                    <Link to="/gallery" className='text-xl font-semibold text-black'>Галерея</Link>
                    <a href='#footer' className='text-xl font-semibold text-black'>Контакты</a>
                </div>

                {/* <div>
                <Switch />
            </div> */}

                <Button className='py-3 px-12 h-auto cursor-pointer max-[744px]:hidden' onClick={() => setIsOpen(true)}>Оставить заявку</Button>

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
                                    Туры
                                </Link>
                            </SheetClose>

                            <SheetClose asChild>
                                <Link
                                    to="/about"
                                    className='text-lg font-semibold'
                                    onClick={() => setIsOpen(false)}
                                >
                                    О нас
                                </Link>
                            </SheetClose>

                            <SheetClose asChild>
                                <Link
                                    to="/kyrgyzstan"
                                    className='text-lg font-semibold'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Кыргызстан
                                </Link>
                            </SheetClose>

                            <SheetClose asChild>
                                <Link
                                    to="/gallery"
                                    className='text-lg font-semibold'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Галерея
                                </Link>
                            </SheetClose>

                            <SheetClose asChild>
                                <a
                                    href="#footer"
                                    className='text-lg font-semibold'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Контакты
                                </a>
                            </SheetClose>

                            <Button
                                className='py-3 px-6 h-auto mt-4'
                                onClick={() => {
                                    setIsOpen(true);
                                }}
                            >
                                Оставить заявку
                            </Button>
                        </SheetContent>
                    </Sheet>
                </div>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="!max-w-[846px] w-full p-15 rounded-3xl max-[744px]:p-5 max-[744px]:h-full max-[744px]:overflow-auto max-[744px]:rounded-none">
                        <DialogHeader className="">
                            <DialogTitle className="text-[40px] font-bold max-[1024px]:text-[36px] max-[744px]:text-[28px]">Готовы к приключению?</DialogTitle>
                            <DialogDescription className="text-gray text-xl font-semibold pb-6 max-[744px]:text-lg">
                                Первый шаг к новому приключению — просто оставьте заявку!
                            </DialogDescription>
                        </DialogHeader>
                        <RequestForm textColor='dark' />
                    </DialogContent>
                </Dialog>
            </div>
        </header>
    )
}