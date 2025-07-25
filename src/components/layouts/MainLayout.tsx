import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { queryClient } from '@/lib/react-query'
import { useLocation } from 'react-router-dom'

import { Header } from './Header'
import { Footer } from './Footer'
import { FixedButtons } from '../shared/FixedButtons'

import { aboutUsPageApi } from '@/api/aboutUs'


export const MainLayout = () => {
    useEffect(() => {
        // queryClient.prefetchQuery({
        //     queryKey: ['about', 'banner'],
        //     queryFn: aboutUsPageApi.getBanner,
        // });

        queryClient.prefetchQuery({
            queryKey: ['about', 'history'],
            queryFn: aboutUsPageApi.getHistory,
        });

        queryClient.prefetchQuery({
            queryKey: ['about', 'digits'],
            queryFn: aboutUsPageApi.getDigits,
        });

        queryClient.prefetchQuery({
            queryKey: ['about', 'teams'],
            queryFn: aboutUsPageApi.getTeams,
        });
    }, []);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, [pathname]);


    return (
        <div>
            <Header />

            <Outlet />

            <Footer />
            <FixedButtons />
        </div>
    )
}