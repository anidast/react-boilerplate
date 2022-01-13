import React from 'react';

function Sidebar() {
  return (
    <div className="column is-2 has-background-white is-size-6 has-text-weight-semibold has-text-grey pl-5 py-6">
      <p className="has-text-success">HOME</p>

      <hr />

      <p>LEARNING</p>
      <p className="my-5">
        <i className="far fa-gem mx-3" />
        Courses
      </p>
      <p className="my-5">
        <i className="fab fa-usb mx-3" />
        Learning plans
      </p>

      <hr />

      <p>MANAGE</p>
      <p className="my-5">
        <i className="fa fa-user mx-3" />
        Users
      </p>
      <p className="my-5">
        <i className="fa fa-sun mx-3" />
        Skills
      </p>
      <p className="my-5">
        <i className="fa fa-chart-area mx-3" />
        Reports
      </p>
      <p className="my-5">
        <i className="fa fa-chart-line mx-3" />
        Analytics
      </p>
      <p className="my-5">
        <i className="fa fa-bullhorn mx-3" />
        Announcements
      </p>

      <hr />

      <p>CONFIGURE</p>
      <p className="my-5">
        <i className="fa fa-star mx-3" />
        Points
      </p>
      <p className="my-5">
        <i className="fa fa-sun mx-3" />
        Reward
      </p>
      <p className="my-5">
        <i className="far fa-envelope mx-3" />
        Email Templates
      </p>
      <p className="my-5">
        <i className="fa fa-info-circle mx-3" />
        Company info
      </p>
      <p className="my-5">
        <i className="fa fa-user mx-3" />
        Billing
      </p>
    </div>
  );
}

export default Sidebar;
