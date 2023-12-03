import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AddPet from "../Pages/Dashbosrd/AddPet/AddPet";
import PetListing from "../Pages/PetListing/PetListing";
import CategoryPets from "../Pages/CategoryPets/CategoryPets";
import PetDetails from "../Pages/PetDetails/PetDetails";
import MyAddedPet from "../Pages/Dashbosrd/MyAddedPet/MyAddedPet";
import AdoptionRequest from "../Pages/Dashbosrd/adoptionRequest/AdoptionRequest";
import CreateDonation from "../Pages/Dashbosrd/CreateDonation/CreateDonation";
import MyDonation from "../Pages/Dashbosrd/MyDonation/MyDonation";
import MyDonationCampaigns from "../Pages/Dashbosrd/MyDonationCampaigns/MyDonationCampaigns";
import UserHome from "../Pages/Dashbosrd/UserHome/UserHome";
import DonationCampaign from "../Pages/DonationCampaign/DonationCampaign";
import DonationCampDetails from "../Pages/DonationCampDetails/DonationCampDetails";
import UpdatePet from "../Pages/Dashbosrd/UpdatePet/UpdatePet";
import AllUsers from "../Pages/Dashbosrd/AllUsers/AllUsers";
import UpdateCampaigns from "../Pages/Dashbosrd/UpdateCampaigns/UpdateCampaigns,";
import AllPets from "../Pages/Dashbosrd/AllPets/AllPets";
import AdminInfo from "../Pages/Dashbosrd/AdminInfo/AdminInfo";
import NotFount from "../Shared/NotFount/NotFount";
import AllDonation from "../Pages/Dashbosrd/AllDonation/AllDonation";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
           path: '/',
           element: <Home></Home>
        },
        {
            path: '/Pet_Listing',
            element: <PetListing></PetListing>
        },
        {
            path: '/category_pets/:category',
            element: <CategoryPets></CategoryPets>
        },
        {
            path: '/donation_campaigns',
            element: <DonationCampaign></DonationCampaign>
        },
        {
            path: 'donation_camp_details/:id',
            element: <DonationCampDetails></DonationCampDetails>
        },
        {
            path:'/pet_details/:id',
            element:<PetDetails></PetDetails>
        },
       {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/signup',
        element: <SignUp></SignUp>
       }
      ]
    },
    {
        path: 'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path: "addpet",
                element: <AddPet></AddPet>
            },
            {
                path: '/dashboard/updatedpet/:id',
                element: <UpdatePet></UpdatePet>
            },
            {
                path: '/dashboard/updateddonation/:id',
                element: <UpdateCampaigns></UpdateCampaigns>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allpets',
                element: <AllPets></AllPets>
            },
            {
                path: '/dashboard/alldonation',
                element: <AllDonation></AllDonation>
            },
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'adminHome',
                element: <AdminInfo></AdminInfo>
            },
            {
                path: 'myadded_pet',
                element: <MyAddedPet></MyAddedPet>
            },
            {
                path: 'adoption_request',
                element: <AdoptionRequest></AdoptionRequest>
            },
            {
                path:'create_donation_campaign',
                element: <CreateDonation></CreateDonation>,
            },
            {
                path: 'my_donations',
                element: <MyDonation></MyDonation>
            },
            {
                path: 'my_donation_campaigns',
                element: <MyDonationCampaigns></MyDonationCampaigns>
            }
        ]
    },
    {
        path: '*',
        element: <NotFount></NotFount>
    }
  ]);