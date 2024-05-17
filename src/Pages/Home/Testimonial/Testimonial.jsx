

import { motion } from 'framer-motion';
import { Zoom } from 'react-awesome-reveal';

const Testimonial = () => {
    return (
        <Zoom>
            <section className="">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">From Shelter to Forever Home Our Success Stories</h2>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                                        <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                            <p>"I had always dreamed of having a furry friend to share my life with, and that dream came true when I adopted Max from PawsNest. Max, a gentle and loving Labrador mix, stole my heart the moment I saw him. His wagging tail and hopeful eyes told a story of resilience and unwavering trust. Since that day, Max has been my faithful companion, bringing boundless joy and love into my life."</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://i.ibb.co/vXbNdTw/view-adorable-chihuahua-dog-spending-time-with-male-owner-home.jpg" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold">Morgan & Max</p>
                                                    <p className="text-sm dark:text-gray-400">A Tale of Unconditional Love</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                                        <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                            <p>"Two years ago, I adopted Luna, a shy and timid rescue cat, from PawsNest. Luna had experienced a difficult past, but her sweet disposition captured my heart. Over time, Luna has blossomed into a confident and affectionate companion. Her purrs and playful antics fill my home with warmth and laughter. Adopting Luna has taught me the profound impact of second chances."</p>
                                            <div className="flex items-center mt-4 space-x-4">
                                                <img src="https://i.ibb.co/PYpC3Bz/beautiful-caucasian-woman-with-dog.jpg" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                                <div>
                                                    <p className="text-lg font-semibold">Rachel & Luna</p>
                                                    <p className="text-sm dark:text-gray-400">The Power of Second Chances</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="grid content-center gap-4">
                                <motion.div whileHover={{ scale: 1.05,  transition: { duration: 0.3 } }}>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>"When I first met Bella, she was a trembling ball of fur in the corner of her kennel at PawsNest. It was evident that she had experienced hardship, but her vulnerability touched my soul. Adopting Bella was the best decision I ever made. Watching her transform from a fearful pup into a confident and loving family member has been a remarkable journey."</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://i.ibb.co/fkS17md/african-american-man-wearing-black-t-shirt-holding-little-dog.jpg" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Steve & Bella</p>
                                                <p className="text-sm dark:text-gray-400">From Fear to Family</p>
                                            </div>
                                        </div>
                                    </div>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05,  transition: { duration: 0.3 } }}>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>"When I first met Bella, she was a trembling ball of fur in the corner of her kennel at PawsNest. It was evident that she had experienced hardship, but her vulnerability touched my soul. Adopting Bella was the best decision I ever made. Watching her transform from a fearful pup into a confident and loving family member has been a remarkable journey."</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://i.ibb.co/vd4DwgC/wonderful-european-female-model-chilling-with-puppy-indoor-portrait-debonair-girl-enjoying-portraits.jpg" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Zazie Skymm</p>
                                                <p className="text-sm dark:text-gray-400">From Fear to Family</p>
                                            </div>
                                        </div>
                                    </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Zoom>
    );
};

export default Testimonial;