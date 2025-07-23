'use client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaRegClipboard, FaRegPaperPlane, FaHardHat, FaCheckCircle, FaTools, FaComments, FaSmile, FaLongArrowAltRight } from 'react-icons/fa'

const steps = [
  { title: 'Project Consultation', icon: <FaRegClipboard />, description: '' },
  { title: 'Project Presentation', icon: <FaRegPaperPlane />, description: '' },
  { title: 'Project Approval', icon: <FaCheckCircle />, description: '' },
  {
    title: 'Pre construction meeting',
    icon: <FaHardHat />,
    description:
      'Unique to Bellwether, we offer a pre construction meeting where we provide a clear and detailed scope before we begin building.',
  },
  { title: 'Installation Day', icon: <FaTools />, description: '' },
  {
    title: 'Open Communications',
    icon: <FaComments />,
    description: 'Open communication with project manager, crew leader, and internal representatives.',
  },
  {
    title: '100% Satisfaction Walk-thru',
    icon: <FaSmile />,
    description:
      'We value your satisfaction with our product above all else. We offer final walkthrough to guarantee you are pleased.',
  },
]

export default function ProcessTimeline({data}) {
  console.log("🚀 ~ ProcessTimeline ~ data:", data)
  const progressRef = useRef(null)
  const containerRef = useRef(null)
  const [progressHeight, setProgressHeight] = useState(0)

  const handleScroll = () => {
    if (!progressRef.current || !containerRef.current) return
    const top = containerRef.current.getBoundingClientRect().top
    const height = containerRef.current.clientHeight
    const windowHeight = window.innerHeight
    const visible = Math.min(1, Math.max(0, (windowHeight - top) / height))
    setProgressHeight(visible * 100)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-[#f94f3d] py-16 px-4 text-white" ref={containerRef}>
      <div className="max-w-[1000px] mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#fffae3] mb-4">{data?.sectionTitle}</h2>
        <p className="text-[18px] max-w-[800px] mx-auto">
          {data?.sectionSubtitle}
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/40 rounded" />
        {/* Progress Line */}
        <div
          ref={progressRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white rounded transition-all duration-300 ease-in-out"
          style={{ height: `${progressHeight}%` }}
        />

        {/* Steps */}
        <div className="flex flex-col gap-16 relative z-10">
          {data?.steps?.map((step, index) => (
            <div key={index} className="flex items-start gap-6 w-full">
              {/* Left or Right */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 flex justify-end pr-4">
                    <div className="bg-[#fffae3] relative text-[#f94f3d] rounded shadow p-5 text-left w-full max-w-sm">
                      <h3 className="font-semibold text-xl">{index + 1}. {step.title}</h3>
                      {step?.description && <p className="text-lg mt-2 text-gray-700">{step?.description}</p>}
                      <div className='bg-[#fffae3] h-5 w-5 rotate-45 absolute -right-2 top-2'/>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-[#fffae3] text-[#f94f3d] p-4 rounded-full text-2xl shadow">
                      <Image src={urlFor(step.icon.asset).url()} alt="icon" width={32} height={32}/>
                    </div>
                  </div>
                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  <div className="w-1/2" />
                  <div className="flex flex-col items-center">
                    <div className="bg-[#fffae3] text-[#f94f3d] p-4 rounded-full text-2xl shadow">
                      <Image src={urlFor(step.icon.asset).url()} alt="icon" width={32} height={32}/>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start pl-4">
                    <div className="bg-[#fffae3] relative text-[#f94f3d] rounded shadow p-5 text-left w-full max-w-sm">
                      <h3 className="font-semibold text-xl">{index + 1}. {step.title}</h3>
                      {step?.description && <p className="text-lg mt-2 text-gray-700">{step?.description}</p>}
                                            <div className='bg-[#fffae3] h-5 w-5 rotate-45 absolute -left-2 top-2'/>

                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center flex justify-center mt-16">
        <Link href={data?.button?.href} className="bg-[#fffae3] flex items-center gap-2 hover:scale-110 transition-all duration-150 text-[#f94f3d] hover:bg-orange-100 cursor-pointer px-6 py-4 rounded font-semibold shadow">
          {data?.button?.label}
          <FaLongArrowAltRight size={18} />
        </Link>
      </div>
    </section>
  )
}