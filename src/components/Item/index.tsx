import React from 'react'
import { ItemProps } from './Item.interface'


export const Item = ({ photo: { title, url } }: ItemProps) => <div className='rounded p-10 flex flex-col gap-10 w-1/4 items-center text-center shadow-2xl'>
    <img className='' src={url} alt={url} />
    <h1>{title}</h1>
</div>