import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useUserRole = () => {
    const {user, loading} = useAuth();
    

    const {data: role, isLoading: roleLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://pet-adoptation-server.vercel.app/users/admin/${user?.email}`);
            return res.data.userRole;
        }
    })
return [role, roleLoading]
};

export default useUserRole;