
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const CategoryCard = ({ card }) => {
    const { photo, category } = card;
    return (
        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="rounded-t-lg w-full h-60" src= {photo} alt="" />
                </div>
                <div className="p-5">
                    <p>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category}</h5>
                    </p>
                    <Link to={`/category_pets/${category}`}>
                    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Show Pets
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    </Link>
                </div>
            </div>

        </motion.div>
    );
};

export default CategoryCard;