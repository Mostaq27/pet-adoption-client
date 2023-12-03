import { RingLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryPetsCard from "./CategoryPetsCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const CategoryPets = () => {
    const { category } = useParams()
    console.log(category)
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    const [pets, setPets] = useState([])
    useEffect(() => {
        fetch('https://pet-adoptation-server.vercel.app/pets')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(pet => pet.category.toLowerCase() === category.toLowerCase())
                setPets(filteredData)
                setLoading(false)

            })
    }, [])


    return (
        <>
            <Helmet>
                <title>CategoryPets | PawsNest</title>
            </Helmet>

            <div className="pt-10">
                <Zoom>
                    <SectionTitle
                        heading={`Meet Our Adorable Pets Looking for Forever Homes : ${category}`}
                        subHeading={'"Discover love in every pawprint. Adopt a pet, change a life. Your home, their happy place. Embrace the joy of adoption today!"'}
                    >
                    </SectionTitle>
                </Zoom>

                {
                    loading ? <div className="  justify-center items-center flex py-20">
                        <RingLoader
                            color="hsla(10, 91%, 27%, 1)"
                            cssOverride={{}}
                            loading
                            size={74}
                            speedMultiplier={1}
                        />
                    </div>
                        :
                        <div>
                            {
                                pets.length == 0 ? <div className="flex justify-center items-center h-[50vh]"> <h1 className="text-3xl font-bold text-center text-red-800">Now there is no pets available this category.</h1></div>
                                    :
                                    <div className="grid grid-cols-1 p-12  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                                        {
                                            pets.map(pet => <CategoryPetsCard
                                                key={pet._id}
                                                pet={pet}></CategoryPetsCard>)
                                        }
                                    </div>
                            }
                        </div>
                }

            </div>
        </>
    )
}


export default CategoryPets;