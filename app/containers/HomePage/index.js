/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Cases from '../../components/Cases';

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <div className="columns">
        <Sidebar />

        <div className="column">
          <p className="is-size-5 has-text-grey has-text-weight-bold my-4">
            Codemi Home
          </p>

          <div className="columns">
            <div className="column is-4">
              <Cases />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
