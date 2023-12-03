import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";



const useAdmin = () => {
    const { user, loading } = useAuth();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axios.get(`https://pet-adoptation-server.vercel.app/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;