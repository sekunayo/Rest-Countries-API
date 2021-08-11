import React from 'react';
import error from '../assets/videos/404gif.gif';
import { motion} from 'framer-motion';

function ErrorPage() {
    const letterVariants = {
        from: {
            opacity: 0,
             transistion: {
                delay: 1.5,
                duration: 1.5,
                
            }
        },
        to: {
            opacity: 1,
            transistion: {
                delay: 1.5,
                duration: 1.5,
                
            }
        }
    }
    const footerVariants = {
        from: {
            y : '101vh'
        },
        to: {
            y : 0,
            transistion: {
                delay: 10,
                duration: 6,
                stiffness: 300,
            }
        }
    }
    return (
        <motion.div className="error-page" transition={{staggerChildren : 1}}>
            <div className="error-page-first">
                <div className="error-page-box">
                    <motion.h1 initial={letterVariants.from} animate={letterVariants.to} variants={letterVariants}>4</motion.h1>
                    <motion.div className="error-page-circle">
                    <img src={error} alt="404_gif"/>
                    </motion.div>
                    <motion.h1 initial={letterVariants.from} animate={letterVariants.to} variants={letterVariants}>4</motion.h1>
                </div>
            </div>
            <div className="error-page-second">
                <motion.div className="error-page-footer" animate={footerVariants.to} initial={footerVariants.from} variants={footerVariants}>
                    <p className="error-page-message"><span className='error-page-inline'>Oops!</span> looks like you have reached an empty page</p>
                    <div className="error-page-goback">
                        <span className="error-page-goback-arrow"><i class="fas fa-long-arrow-alt-left"></i></span>
                        <span className="error-page-goback-message">Go Home</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ErrorPage
