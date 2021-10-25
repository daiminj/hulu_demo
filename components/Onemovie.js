import Image from "next/dist/client/image"
import {ThumbUpIcon} from "@heroicons/react/outline"
import { forwardRef } from "react"
const Onemovie=forwardRef(({result},ref)=> {
    return (
        <div  ref={ref} 
        className='group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image 
                layout='responsive'
                src={result.imageurl}
                className="h-32 w-32 flex-shrink-0 ml-6"
                height={1080}
                width={1920}
            />
            <div className="p-2">
                <p className='truncate max-w-md'>{result.title}</p>
                <h2 className="mt-1 text-2xl text-white 
                transition-all duration-100 ease-in-out 
                group-hover:font-bold">
                    {result.desc}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.date}
                    <ThumbUpIcon className="h-5 mx-2"/>{result.propertyCount}
                </p>
            </div>
        </div>
    )
})

export default Onemovie
