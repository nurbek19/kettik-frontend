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

import logo from '../../assets/logo.png'
import { RequestForm } from '../shared/RequestForm';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='header flex justify-between items-center mx-auto bg-white rounded-full max-w-[1280px] w-full px-[20px] py-[14px] fixed top-0 z-1'>
            <Link to="/">
                <img src={logo} className='w-[130px]' alt="logotype" />
            </Link>

            <div className='flex gap-x-[40px]'>
                <Link to="tours" className='text-xl font-semibold text-black'>Туры</Link>
                <Link to="about" className='text-xl font-semibold text-black'>О нас</Link>
                <Link to="kyrgyzstan" className='text-xl font-semibold text-black'>Кыргызстан</Link>
                <Link to="/gallery" className='text-xl font-semibold text-black'>Галерея</Link>
                <a href='#footer' className='text-xl font-semibold text-black'>Контакты</a>
            </div>

            {/* <div>
                <Switch />
            </div> */}

            <Button className='py-3 px-12 h-auto cursor-pointer' onClick={() => setIsOpen(true)}>Оставить заявку</Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="!max-w-[846px] w-full p-15 rounded-3xl">
                    <DialogHeader className="">
                        <DialogTitle className="text-[40px] font-bold">Готовы к приключению?</DialogTitle>
                        <DialogDescription className="text-gray text-xl font-semibold pb-6">
                            Первый шаг к новому приключению — просто оставьте заявку!
                        </DialogDescription>
                    </DialogHeader>
                    <RequestForm textColor='dark' />
                </DialogContent>
            </Dialog>
        </header>
    )
}