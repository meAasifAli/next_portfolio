import React from 'react'

const Skill = ({ icon }: { icon: JSX.Element }) => {
  return (
    <div className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear">
      <div className="sm:p-4  p-2 rounded-full cursor-pointer bg-[#222222] overflow-hidden flex justify-center items-center">
        {icon}
      </div>
    </div>
  )
}

export default Skill
