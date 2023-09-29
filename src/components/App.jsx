import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from './user.json';
import data from './data.json';
import friendsData from './friends.json';
import transactionsData from './transactions.json';
import './App.css';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* Render the Statistics */}
      <Statistics title="Upload stats" stats={data} />

      {/* Render the Friends */}
      <FriendList friends={friendsData} />

      {/* Render the Transactions */}
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;