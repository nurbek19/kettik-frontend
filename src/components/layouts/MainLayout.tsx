import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

import { Header } from './Header'
import { Footer } from './Footer'

import { aboutUsPageApi } from '@/api/aboutUs'


export const MainLayout = () => {
    const t = useQuery({
        queryKey: ['about', 'banner'],
        queryFn: aboutUsPageApi.getBanner,
    });

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
        </div>
    )
}