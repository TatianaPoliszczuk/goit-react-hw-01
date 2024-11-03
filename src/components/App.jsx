import "../index.css";
import "modern-normalize";
import "./App.css";
import Profile from "./Profile/Profile";
import userData from "../assets/user.Data.json";
import friends from "../assets/friends.json";
import FriendList from "./FriendList/FriendList";
import transactions from "../assets/transaction.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  console.log(userData);
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;