import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FrendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import {data, statsData, friends, transactions } from "./data"


export const App = () => {
  return (
    <div style={{ paddingLeft: 500}}>
    <Profile 
      username={data.username}
      tag={data.tag}
      location={data.location}
      avatar={data.avatar}
      stats={data.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
  
    </div>
  );
};



