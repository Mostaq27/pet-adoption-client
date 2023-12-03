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
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";




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
            element: <PrivateRoutes><DonationCampDetails></DonationCampDetails></PrivateRoutes>
        },
        {
            path:'/pet_details/:id',
            element:<PrivateRoutes><PetDetails></PetDetails></PrivateRoutes>
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
                element: <PrivateRoutes><AddPet></AddPet></PrivateRoutes>
            },
            {
                path: '/dashboard/updatedpet/:id',
                element: <PrivateRoutes><UpdatePet></UpdatePet></PrivateRoutes>
            },
            {
                path: '/dashboard/updateddonation/:id',
                element: <PrivateRoutes><UpdateCampaigns></UpdateCampaigns></PrivateRoutes>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allpets',
                element: <AdminRoute><AllPets></AllPets></AdminRoute>
            },
            {
                path: '/dashboard/alldonation',
                element: <AdminRoute><AllDonation></AllDonation></AdminRoute>
            },
            {
                path: 'userHome',
                element: <PrivateRoutes><UserHome></UserHome></PrivateRoutes>
            },
            {
                path: 'adminHome',
                element: <AdminRoute><AdminInfo></AdminInfo></AdminRoute>
            },
            {
                path: 'myadded_pet',
                element: <PrivateRoutes><MyAddedPet></MyAddedPet></PrivateRoutes>
            },
            {
                path: 'adoption_request',
                element: <PrivateRoutes><AdoptionRequest></AdoptionRequest></PrivateRoutes>
            },
            {
                path:'create_donation_campaign',
                element: <PrivateRoutes><CreateDonation></CreateDonation></PrivateRoutes>,
            },
            {
                path: 'my_donations',
                element: <PrivateRoutes><MyDonation></MyDonation></PrivateRoutes>
            },
            {
                path: 'my_donation_campaigns',
                element: <PrivateRoutes><MyDonationCampaigns></MyDonationCampaigns></PrivateRoutes>
            }
        ]
    },
    {
        path: '*',
        element: <NotFount></NotFount>
    }
  ]);