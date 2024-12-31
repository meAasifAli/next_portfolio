import * as motion from 'motion/react-client'

const Skill = ({ icon }: { icon: JSX.Element }) => {
  return (
    <motion.div
      initial={{ y: '-100%' }}
      whileInView={{ y: '0%' }}
      viewport={{ once: false }}
      whileHover={{
        rotateZ: '360deg',
        rotateY: '360deg',
        rotateX: '360deg',
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="p-[2px] rounded-full shadow-sm shadow-[#9b42f5] hover:scale-105 hover:transition-all duration-300 ease-linear"
    >
      <div className="sm:p-4  p-2 rounded-full cursor-pointer bg-[#100d25] overflow-hidden flex justify-center items-center">
        {icon}
      </div>
    </motion.div>
  )
}

export default Skill
