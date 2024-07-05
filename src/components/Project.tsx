import { ProjectProps } from "@/types/project"
import Image from "next/image"
import Link from "next/link"

type project = {
    project: ProjectProps
}


const Project = ({ project }: project) => {
    return (
        <div className='flex flex-col items-start  w-full sm:w-[30%]  bg-[#1A1A1A] p-4 rounded-2xl max-h-[500px] space-y-4 overflow-hidden shadow-sm shadow-[#d3e97a] hover:scale-105 transition-all delay-75 ease-linear'>
            <Image src={project.thumbnail} alt='err' height={200} width={400} />
            <h3 className='text-white text-[24px] font-medium font-amenti'>{project.title}</h3>
            {/* <p className='font-amenti font-regular text-sm text-[#c7c7c7] text-wrap'>{project.content.slice(0, 100)}..</p> */}
            {/* <div className='flex items-center w-full justify-between gap-4'>
                <button className='reverse-animated-button w-full p-2'>
                    <Link href={project.DeployURL}>Live</Link>
                </button>
                <button className='reverse-animated-button w-full p-2'>
                    <Link href={project.GitURl}>Github</Link>
                </button>
            </div> */}
        </div>
    )
}
export default Project