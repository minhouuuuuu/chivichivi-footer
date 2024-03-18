import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from "react";

export default function Footer() {

    const container = useRef();
    const texts = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect(() => {
        scrollYProgress.on('change', e => {
            texts.current.forEach((text,i) => {
                text.setAttribute('startOffset', -40 + (i * 40) + (e * 40) + "%")
            })
        })
    }, [])

    return (
        <div>
            <svg className="w-full mb-40" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text className="text-[6px] uppercase" style={{fill: "red"}}>
                    {
                        [...Array(3)].map((_,i) => {
                            return  <textPath key={i} ref={ref => texts.current[i] = ref} href="#curve" startOffset={i * 40 + "%"}>Curabitur mattis efficitur velit</textPath>
                        }) 
                    }
                </text>
            </svg>
            <Logos scrollProgress={scrollYProgress} />
        </div>
    )
}

function Logos({scrollProgress}) {

    const y = useTransform(scrollProgress,[0, 1], [-700, 0])
    return (
        <div className='h-[250px]  bg-black overflow-hidden'>
            <motion.div style={{y}} className=" h-full flex items-center justify-center gap-5">
                {
                    [...Array(5)].map((_, i) => {
                        return <img key={`img_${i}`} className="w-[80px] h-[80px]" src={`/medias/${i+1}.jpg`} />
                    })
                } 
            </motion.div>
        </div>
    )
}