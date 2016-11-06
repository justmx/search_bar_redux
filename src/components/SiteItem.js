import React, {PropTypes} from 'react';

const SiteItem = ({siteInfo}) => {
    return (
      <div className="siteItem">
        <div>
          <a>{siteInfo.siteUrl}</a>
        </div>
        <div>
          <p>{siteInfo.description}</p>
        </div>
      </div>
    );
  };


    SiteItem.propTypes = {
      siteInfo: PropTypes.object.isRequired
    };

  export default SiteItem;
