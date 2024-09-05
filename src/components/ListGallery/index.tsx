import React from 'react'
import { ListGalleryProps } from './ListGallery.interface'
import { IPhoto } from '@/pages/Home/Home.interface'
import { Item } from '../Item'

export const ListGallery = ({ photos }: ListGalleryProps) => <div className='flex flex-wrap'>
    {
        photos?.map((item: IPhoto, idx: number) => <Item data-testid={`item-${idx}`} key={idx} photo={item} />)
    }
</div>
