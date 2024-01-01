import ProfileSidebar from "../components/Profile/ProfileSidebar";

// const user = {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   profilePicture:
//     "https://imgix.bustle.com/uploads/image/2023/6/12/ba491d0c-00fb-48c8-be45-1edf99930180-1297317.jpg?w=400&h=300&fit=crop&crop=faces&auto=format%2Ccompress",
// };

const Profile = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <ProfileSidebar />
      </div>
    </div>
  );
};

export default Profile;
