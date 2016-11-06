import React, {PropTypes} from 'react';
import SiteItem from './SiteItem';

const SitesDisplay = ({showSites}) => {
  const _siteItem = showSites.map((option,index) => {
    return (
        <SiteItem siteInfo={option} key={'site' + index} />
      );
    });
    return (
      <div className="siteDisplay">
        {_siteItem}
      </div>
    );
};

SitesDisplay.propTypes = {
  showSites: PropTypes.array.isRequired
};

export default SitesDisplay;
