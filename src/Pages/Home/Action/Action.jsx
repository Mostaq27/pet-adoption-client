import img1 from "../../../assets/about3.jpg";
import img2 from "../../../assets/about2.jpg";
import { Zoom } from "react-awesome-reveal";
import { FaAngleRight } from "react-icons/fa";


const Action = () => {
    return (

        <div className="relative overflow-hidden py-24">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-[#00aaff] sm:text-6xl">Give a Home, Give a Heart</h1>
                        <p className="mt-4 text-xl text-gray-500">Embrace the joy of pet adoption. Open your heart and home to a furry companion, and experience the unconditional love they bring.</p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* -- Decorative image grid -- */}
                            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img src={img1} alt=""
                                                    className="h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img src="https://i.ibb.co/vd4DwgC/wonderful-european-female-model-chilling-with-puppy-indoor-portrait-debonair-girl-enjoying-portraits.jpg" alt=""
                                                className="h-full w-full object-cover object-center" />
                                                </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/PYpC3Bz/beautiful-caucasian-woman-with-dog.jpg" alt=""
                                                    className="h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/fkS17md/african-american-man-wearing-black-t-shirt-holding-little-dog.jpg" alt=""
                                                    className="h-full w-full object-cover object-center" />
                                            </div>
                                           
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img src={img2} alt=""
                                                        className="h-full w-full object-cover object-center" />
                                                </div>

                                            
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/vXbNdTw/view-adorable-chihuahua-dog-spending-time-with-male-owner-home.jpg" alt=""
                                                    className="h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://i.ibb.co/nbVScv0/full-shot-woman-posing-with-cute-dog.jpg" alt=""
                                                    className="h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-outline btn-sm py-2 px-4 mt-4">
                           Adopt Now<FaAngleRight />
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Action;