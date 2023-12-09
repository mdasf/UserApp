import { useState } from "react";
import Loading from "./component/Loading";
import UserDetails from "./component/UserDetails";
import UserList from "./component/UserList";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const { data: users, loading, error } = useFetch("/users");

  const handleCurrentUser = (e) => {
    const selectedUser = users.find((user) => user.id === e.target.dataset.id);
    setCurrentUser(selectedUser);
  };

  if (loading) return <Loading />;

  if (error) return "Encountered Error while fetching UserList !";

  return (
    users && (
      <div className="flex flex-col md:flex-row gap-10 p-10 sm:p-28 w-full md:h-[700px] font-montserrat justify-center">
        <UserList
          users={users}
          handleCurrentUser={handleCurrentUser}
          currentUserId={currentUser?.id}
        />
        <UserDetails currentUser={currentUser} />
      </div>
    )
  );
}

export default App;
