import React, { useEffect, useState } from 'react'
import { IPhoto } from './Home.interface'
import { Suspense, lazy } from "react";
const Gallery = lazy(() => import('../../components/ListGallery').then((module) => ({ default: module.ListGallery })))

const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=1000'

const Home = () => {
    const [photos, setPhotos] = useState<IPhoto[]>([])

    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = async () => {
        const res = await fetch(ENDPOINT)
        const data = await res.json()
        setPhotos(data)
    }

    return (
        <div>
            <Suspense fallback={
                <div>Component is loading, please wait</div>
            }>
                <Gallery photos={photos} />
            </Suspense>
        </div>
    )
}

export default Home