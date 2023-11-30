import useAuth from "../../../Hooks/useAuth";

 
const UserHome = () => {
    const {user} = useAuth();
    return (
        <>
        <div className=" text-center">
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="mt-20">
            <div className="avatar online">
                <div className="w-32 rounded-full">
                    <img src={user.photoURL} />
                </div>
                <div>
                    
                </div>
            </div>
            <p className="text-xl font-semibold">Name: {user?.displayName}</p>
            <p className="text-xl font-semibold">Email: {user?.email}</p>
            <p className="text-xl font-semibold">Status: </p>
            </div>
        </div>
        </>
    );
};

export default UserHome;