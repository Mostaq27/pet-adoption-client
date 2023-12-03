import { FaDonate, FaEnvelope, FaHome, FaUsers } from "react-icons/fa";
import { SiPetsathome } from "react-icons/si";
import { MdPets } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { SiCampaignmonitor } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import logoImg from "../assets/logo.jpg"
import { Helmet } from "react-helmet";
import useAdmin from "../Hooks/useAdmin";




const Dashboard = () => {

    // TODO: get isAdmin value from the database
       const [isAdmin] = useAdmin();
    // const isAdmin = true;

    return (
        <>
            <Helmet>
                <title>Dashboard | PawsNest</title>
            </Helmet>
            <div className="flex">
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen bg-[#f0717b28]">
                    <div className="flex mx-10 gap-0 mt-6">
                        <img src={logoImg} className="h-8 w-8" alt="" />
                        <h2 className="uppercase text-2xl font-semibold text-white mx-8 w-[180px] h-[31px]">PawsNest</h2>
                    </div>

                    <ul className="menu p-4 text-white font-medium">


                    {
                        isAdmin? <>
                        <li>
                            <NavLink to="/dashboard/adminHome">
                                <FaHome></FaHome>
                                Admin Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/allusers">
                                <FaUsers />
                                All Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/allpets">
                                <SiPetsathome />
                                All Pets</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/alldonation">
                                <FaDonate />
                                All Donations</NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/userHome">
                                <FaHome></FaHome>
                                User Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/addPet">
                                {/* <FaUtensils></FaUtensils> */}
                                <MdPets></MdPets>
                                Add a Pet</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/myadded_pet">
                                <SiPetsathome></SiPetsathome>
                                My Added Pets</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/adoption_request">
                                <BiSolidDonateHeart />
                                Adoption Request</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/create_donation_campaign">
                                <SiCampaignmonitor />
                                Create Donation Camp</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my_donation_campaigns">
                                <MdCampaign />
                                My Donation Campaigns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my_donations">
                                <BiSolidDonateHeart />
                                My Donations
                            </NavLink>
                        </li>
                        </>:
                        <>
                        
                        <li>
                            <NavLink to="/dashboard/userHome">
                                <FaHome></FaHome>
                                User Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/addPet">
                                {/* <FaUtensils></FaUtensils> */}
                                <MdPets></MdPets>
                                Add a Pet</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/myadded_pet">
                                <SiPetsathome></SiPetsathome>
                                My Added Pets</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/adoption_request">
                                <BiSolidDonateHeart />
                                Adoption Request</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/create_donation_campaign">
                                <SiCampaignmonitor />
                                Create Donation Camp</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my_donation_campaigns">
                                <MdCampaign />
                                My Donation Campaigns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my_donations">
                                <BiSolidDonateHeart />
                                My Donations
                            </NavLink>
                        </li>
                        </>
                    }


                        {/* shared nav links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>
                    </ul>
                </div>

                {/* dashboard content */}
                < div className="flex-1 p-8" >
                    <Outlet></Outlet>
                </div >
            </div >
        </>

    );
};

export default Dashboard;