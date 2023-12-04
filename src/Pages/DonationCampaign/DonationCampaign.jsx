import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import DonationCampaignCart from "./DonationCampaignCart";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
import { Zoom } from "react-awesome-reveal";

const DonationCampaign = () => {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    const [pets, setPets] = useState([])
    useEffect(() => {
        fetch('https://pet-adoptation-server.vercel.app/createdonation')
            .then(res => res.json())
            .then(data => {
                setPets(data)
                setLoading(false)

            })
    }, [])

    return (
        <>
            <Helmet>
                <title>DonationCamp | PawsNest</title>
            </Helmet>
            <div className="p-10">
                <Zoom>
                    <SectionTitle
                        heading={`Make a Difference with Your Donation`}
                        subHeading={'Explore our Donation Campaigns and be a part of positive change. Your contribution, no matter the size, can impact lives in education, disaster relief, and healthcare. Join us in creating a better future – start giving today.'}
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
                        <div className="grid grid-cols-1 p-12  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                            {
                                pets.map(pet => <DonationCampaignCart
                                    key={pet._id}
                                    pet={pet}></DonationCampaignCart>)
                            }
                        </div>
                }

            </div>
        </>
    )
}

export default DonationCampaign