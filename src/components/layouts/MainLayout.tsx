import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { queryClient } from '@/lib/react-query'

import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTopButton } from '../shared/ScrollToTopButton'

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


    return (
        <div>
            <Header />

            <Outlet />

            <Footer />
            <ScrollToTopButton />
        </div>
    )
}