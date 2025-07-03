import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@/pages/Home/Home'
import { MainLayout } from '@/components/layouts/MainLayout'
import { NotFound } from '@/pages/NotFound'
import { AboutUs } from '@/pages/AboutUs/AboutUs'
import { Gallery } from '@/pages/Gallery/Gallery'
import { Tours } from '@/pages/Tours/Tours'
import { Kyrgyzstan } from '@/pages/Kyrgyzstan/Kyrgyzstan'
import { TourDetail } from '@/pages/TourDetail/TourDetail'
import { Article } from '@/pages/Article/Article'

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: AboutUs },
            { path: "gallery", Component: Gallery },
            { path: "tours", Component: Tours },
            { path: "tours/:id", Component: TourDetail },
            { path: "kyrgyzstan", Component: Kyrgyzstan },
            { path: "kyrgyzstan/:id", Component: Article },
            { path: "*", Component: NotFound },
        ],
    },
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}