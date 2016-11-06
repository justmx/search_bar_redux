import React, {PropTypes} from 'react';

const Header = () => {
  return (
    <div id="header">
      <nav >
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="#">Adslotmedia</a>
          </div>
        </div>
      </nav>
    </div>
  );
};


Header.propTypes = {
};

export default Header;
