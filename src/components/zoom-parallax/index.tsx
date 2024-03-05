"use client"

import styles from './styles.module.scss';

import Picture1 from '../../../public/bg-overview.jpeg';
import Picture2 from '../../../public/bg-interior.jpeg';
import Picture3 from '../../../public/bg-connectivity.jpeg';
import Picture4 from '../../../public/bg-charging.jpeg';
import Picture5 from '../../../public/bg-safety.jpeg';

import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';


export default function ZoomParallax() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 6]);


    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale7
        },
        {
            src: Picture5,
            scale: scale8
        },
    ]


    return (
        <div ref={container} className={styles.container}>
               <div className={styles.sticky}>
                    {
                        pictures.map( ({src, scale}, index) => {
                            return <motion.div key={index} style={{scale}} className={styles.el}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={src}
                                        fill
                                        alt="image"
                                        placeholder='blur'
                                    />
                                </div>
                            </motion.div>
                        })
                    }
                </div>
            </div>
        )

}