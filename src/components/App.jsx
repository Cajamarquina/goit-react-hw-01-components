import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';
import user from '../database/user.json';
import data from '../database/data.json';
import friendsData from '../database/friends.json';
import transactionsData from '../database/transactions.json';
import './App.css';
import './Profile/Profile.css';
import './Statistics/Statistics.css';
import './Friends/Friends.css';
import './Transactions/Transactions.css';

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