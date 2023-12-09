import React from "react";

function UserDetails({ currentUser }) {
  if (!currentUser)
    return (
      <div className="max-w-2xl w-full md:w-1/2">User Info not available.</div>
    );

  return (
    <div className="max-w-2xl w-full md:w-1/2">
      <h1 className="bg-[#C5DFFF] uppercase text-center text-lg py-2 mb-2 ">
        User Details
      </h1>
      <div className="max-w-lg  h-full mx-auto flex flex-col">
        {Object.keys(currentUser).length === 0 ? (
          <p className="m-10 text-center">Select User to display UserInfo </p>
        ) : (
          <>
            <div className="flex flex-col gap-4 items-center mb-4 p-2">
              <img
                src={currentUser?.avatar}
                alt="profile image"
                className="w-32 h-32 rounded-full flex justify-center items-center bg-[#D4D4D4]"
              />
              <p>@{currentUser?.profile?.username}</p>
            </div>

            <p className="bg-[#DBDBDB] text-sm border  border-[#6C6C6C] p-2 mb-14">
              {currentUser?.Bio}
            </p>
            <div className="flex flex-col gap-2 mb-4 ">
              <label className="text-xs" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="p-2 bg-[#DBDBDB] text-sm border  border-[#6C6C6C]"
                type="text"
                id="fullname"
                value={`${currentUser?.profile?.firstName} ${currentUser?.profile?.lastName}`}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-xs" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                className="p-2 bg-[#DBDBDB] text-sm border  border-[#6C6C6C]"
                type="text"
                id="jobTitle"
                value={`${currentUser?.jobTitle}`}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 bg-[#DBDBDB] text-sm border  border-[#6C6C6C]"
                type="text"
                id="email"
                value={`${currentUser?.profile?.email}`}
                disabled
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserDetails;

// [
//   {
//       "createdAt": "2021-12-17T07:09:25.106Z",
//       "avatar": "https://cdn.fakercloud.com/avatars/laasli_128.jpg",
//       "Bio": "Magni placeat laboriosam reiciendis in officiis non nihil placeat.",
//       "jobTitle": "Dynamic Web Designer",
//       "profile": {
//           "username": "Xander.Hammes",
//           "firstName": "Marilyne",
//           "lastName": "Ruecker",
//           "email": "Micaela_Schoen@yahoo.com"
//       },
//       "id": "1"
//   },
