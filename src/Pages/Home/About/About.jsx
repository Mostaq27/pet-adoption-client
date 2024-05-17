
import img1 from "../../../assets/about3.jpg";
import { Zoom } from "react-awesome-reveal";

const About = () => {
    return (
        <>
            <Zoom>
            <div className='mx-10'>
                <section className=" py-8">
                    <div className="container mx-auto px-2 pt-4 pb-12">
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-red-600">About Us</h1>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto bg-gradient-to-r from-purple-800 via-pink-500 to-red-400 sm:w-56 lg:w-64 opacity-75 my-0 py-0 rounded-t"></div>
                        </div>
                        <h1 className="text-lg font-semibold text-center">
                            Welcome to <span className="text-5x text-orange-400">PawsNest</span> – the easiest way to find your new pet companion! <br /> We've designed this platform to connect loving homes with pets in need, making the adoption process simple and enjoyable.
                        </h1>

                        <div className="flex flex-col md:flex-row justify-center pt-12 my-12 sm:my-4">
                            <div className="md:w-1/2 pr-4 ">
                                <h3 className="text-2xl mb-2 font-bold text-red-600">How The Website
                                    works</h3>
                                <p className=" mb-8">Browse through our user-friendly interface, explore detailed pet profiles, and when you find a match, connect with adoption agencies or individuals. Creating lasting bonds with your future furry friend has never been this easy!</p>
                                <h3 className="text-2xl mb-2 font-bold text-red-600">Why We Created This Website</h3>
                                <p className=" mb-8"> Our love for animals and a commitment to their well-being led to the creation of <span className="text-5x text-orange-400">PawsNest</span>. We believe every pet deserves a loving home. By providing a centralized platform for pet adoption, we aim to reduce shelter populations and support responsible pet ownership.
                                    Join us in making a difference. Choose <span className="text-5x text-orange-400">PawsNest</span> for a joyful and seamless pet adoption experience. Thank you for being a part of our mission!</p>
                            </div>
                            <div className="md:w-1/2">
                                <img src={img1} alt="Restaurant" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            
            </Zoom>
        </>
    );
};

export default About;