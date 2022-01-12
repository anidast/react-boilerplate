import React from 'react';

function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar has-shadow"
      role="navigation"
      aria-label="dropdown navigation"
    >
      <div className="navbar-brand">
        <img
          src="https://files-id.codemi.co.id/files/learning/image/68c3ec1a6c5d155d748cde836d0289cb"
          alt="Codemi logo"
          width="140"
        />
        <div className="navbar-burger" data-target="navbar">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <i className="fa fa-bell has-text-grey-light is-size-5 mx-4" />

            <div className="navbar-item has-dropdown">
              <a href="/#">
                <figure className="image is-32x32">
                  <img
                    className="is-rounded"
                    src="https://source.unsplash.com/400x400/?people"
                    alt="Avatar"
                  />
                </figure>
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="/#">
                  User profile
                </a>
                <a className="navbar-item" href="/#">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
