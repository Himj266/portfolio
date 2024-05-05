import Image from "next/image"

export const RandomFacts= ()=>{
    return <div className="w-full px-20 flex items-center justify-center ga-5 border-b border-gray-800 py-24">
        <div className="w-full flex justify-between items-center" style={{maxWidth:'1024px'}}>
        <Image src="./randomFacts.svg" alt="random Facts Image" height={300} width={300}/>
        <div className="flex flex-col gap-5">
            <h5>Random Facts</h5>
        </div>
        </div>

    </div>
}