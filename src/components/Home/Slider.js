import React, { useEffect } from 'react';
import Glide from "@glidejs/glide"
import img1 from '../../assets/service/dj.png'
import img2 from '../../assets/service/git.png'
import img3 from '../../assets/service/js.png'
import img4 from '../../assets/service/machine.png'
import img5 from '../../assets/service/node.png'
import img6 from '../../assets/service/python.png'


const Slider = () => {

    useEffect(() => {
        const slider = new Glide(".glide-01", {
            type: "carousel",
            focusAt: "center",
            perView: 3,
            autoplay: 3000,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])


    return (
        <>
            {/*<!-- Component: Carousel with controls inside --> */}
            <div className="glide-01 relative w-3/4 mx-auto py-10">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li>
                            <img
                                src={img1}
                                className="m-auto border-2 border-gray-500"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src={img2}
                                className="m-auto border-2 border-gray-500"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src={img3}
                                className="m-auto border-2 border-gray-500"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src={img4}
                                className="m-auto border-2 border-gray-500"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src={img5}
                                className="m-auto border-2 border-gray-500"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src={img6}
                                className="m-auto border-2 border-gray-500"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
                {/*    <!-- Controls --> */}
                <div
                    className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
                    data-glide-el="controls"
                >
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <title>prev slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <title>next slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
            {/*<!-- End Carousel with controls inside --> */}
        </>
    );
};

export default Slider;