const UsersDetails = async ({ params }) => {
    const { id } = await params;
    return (
        <div>
            <p>user details for id: {id}</p>
        </div>
    );
};

export default UsersDetails;