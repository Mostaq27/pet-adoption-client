
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import DonationCampDetailsCart from './DonationCampDetailsCart';
import { Helmet } from 'react-helmet';

const DonationCampDetails = () => {

    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    const [pets, setPets] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/createdonation')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(pet => pet._id === id);
                setPets(filteredData)
                setLoading(false)

            })
    }, [id])

  return (
    <>
    <Helmet>
        <title>DonationCampDetails | PawsNest</title>
    </Helmet>
            
    <div className="pt-10">
        <SectionTitle
        heading={`Meet Our Adorable Pets Looking for Forever Homes `}
        subHeading={'"Discover love in every pawprint. Adopt a pet, change a life. Your home, their happy place. Embrace the joy of adoption today!"'}
        >
        </SectionTitle>
       
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
                <div className="flex justify-center py-10">
                    {
                        pets.map(pet => <DonationCampDetailsCart
                            key={pet._id}
                            pet={pet}></DonationCampDetailsCart>)
                    }
                </div>
        }

    </div>
</>
  )
}

export default DonationCampDetails