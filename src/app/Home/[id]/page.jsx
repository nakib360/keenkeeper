import FriendsData from "@/app/lib/Friends.json"
const UsersDetails = async ({ params }) => {
    const { id } = await params;
    const user = FriendsData.filter(i => i.id === id);
    return (
        <div className="grid-cols-15">
            <div className=" col-span-5">
                <div className="bg-white p-10">
                    
                </div>
            </div>
            <div className="col-span-10">

            </div>
        </div>
    );
};

export default UsersDetails;