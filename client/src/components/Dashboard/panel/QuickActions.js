import React from 'react';
import SendAlert from './actions/SendAlert';
import SendBroadcast from './actions/SendBroadcast';
import SendPoll from './actions/SendPoll';

const QuickActions = () => (
  <div className="card mb-4">
    <div className="card-body">
      <p>
        Quick Actions
      </p>
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <SendBroadcast />
        </div>
        <div className="col-xl-4 col-md-6">
          <SendAlert />
        </div>
        <div className="col-xl-4 col-md-6">
          <SendPoll />
        </div>
      </div>
    </div>
  </div>
);

export default QuickActions;
