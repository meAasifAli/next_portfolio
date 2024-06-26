const Contact = () => {
    return (
        <div className='flex flex-col sm:flex-row items-start justify-between '>
            <div className='w-full sm:w-1/2 space-y-0'>
                <h1 className='text-white text-[43px] sm:text-[76px]  font-medium leading-[90%]  font-bebasNue mb-4 sm:mb-8'>let&apos;s connect</h1>
                <p className='text-[#c7c7c7] text-[16px] sm:text-[18px] text-start font-normal leading-[160%] mb-8 sm:mb-0 font-manRope'>Say Hello at <a className="underline text-white" href="mailto:asif15310@gmail.com">asif@gmail.com</a> </p>
                <p className='text-[#c7c7c7] text-[16px] sm:text-[18px] text-start font-normal leading-[160%] mb-8 sm:mb-0 font-manRope'>For more info check <a className="underline text-white" href=""> my resume</a> </p>
            </div>
            <form className='w-full sm:w-1/2 mt-6 sm:mt-0 space-y-4 sm:space-y-6'>
                <div>
                    <label className="text-[16px] font-manRope text-[#c7c7c7]" htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder='Your Name' className="w-full px-4 py-3  bg-[#1A1A1A] rounded-md focus:outline-none focus:border-[#c7c7c7]" />
                </div>
                <div>
                    <label className="text-[16px] font-manRope text-[#c7c7c7]" htmlFor="name">Email</label>
                    <input type="email" id="email" placeholder='Your Email' className="w-full px-4 py-3  bg-[#1A1A1A] rounded-md focus:outline-none focus:border-[#c7c7c7]" />
                </div>
                <div>
                    <label className="text-[16px] font-manRope text-[#c7c7c7]" htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder='Your Email' className="w-full px-4 py-3  bg-[#1A1A1A] rounded-md focus:outline-none focus:border-[#c7c7c7]" />
                </div>
                <div>
                    <label className="text-[16px] font-manRope text-[#c7c7c7]" htmlFor="msg">Message</label>
                    <textarea id="msg" placeholder='Your Message' className="w-full px-4 py-3  bg-[#1A1A1A] rounded-md focus:outline-none focus:border-[#c7c7c7]" ></textarea>
                </div>
                <button className="h-[54px] w-[140px] bg-[#D3E97A] text-black rounded-full font-manRope">submit</button>
            </form >
        </div >
    )
}
export default Contact