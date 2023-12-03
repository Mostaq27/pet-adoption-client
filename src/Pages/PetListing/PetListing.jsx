import { RingLoader } from "react-spinners";
import PetListingCard from "./PetListingCard";
import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";


const PetListing = () => {


    const [loading, setLoading] = useState(true)
    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    const [pets, setPets] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/pets')
            .then(res => res.json())
            .then(data => {
                // const filteredData = data.filter(pet => pet.category.toLowerCase() === category.toLowerCase())
                setPets(data)
                setLoading(false)

            })
    }, [])


    return (
        <>
            <Helmet>
                <title>PetListing | PawsNest</title>
            </Helmet>
            <div className="pt-10">
                <SectionTitle
                    heading={`Meet Our Adorable Pets Looking for Forever Homes `}
                    subHeading={'"Discover love in every pawprint. Adopt a pet, change a life. Your home, their happy place. Embrace the joy of adoption today!"'}
                >
                </SectionTitle>
                <div className="mt-10">
                    <form >
                        <div className="flex flex-col justify-center items-center md:flex-row gap-10 ">
                            <select className="select select-bordered w-32">
                                <option value="Dogs">Dogs</option>
                                <option value="Cats">Cats</option>
                                <option value="Rabbits">Rabbits</option>
                                <option value="Horse">Horse</option>
                                <option value="Birds">Birds</option>
                                <option value="Fishes">Fishes</option>
                            </select>
                            <input type="text" name="name" placeholder="Search by pets name" id="" className="input input-bordered w-60" />
                            <input type="button" value="Search" className="btn btn-primary" />
                        </div>
                    </form>
                </div>

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
                        <div className="grid grid-cols-1 p-12  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                            {
                                pets.map(pet => <PetListingCard
                                    key={pet._id}
                                    pet={pet}></PetListingCard>)
                            }
                        </div>
                }

            </div>
        </>
    )
}

export default PetListing;