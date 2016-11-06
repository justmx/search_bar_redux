import _ from 'underscore';

export const getSites = (keyword, categories, sites) => {
  let keyword_list = keyword.split(',');
  return _.union(matchSiteName(sites, keyword_list), getSitesByCategories(keyword_list, categories, sites));
};

const checkLength = (keyword) => {
  let is_ok_to_check = true;
  if(!keyword || keyword.trim().length < 2 ){
    is_ok_to_check = false;
  }
  return is_ok_to_check;
};

const matchSiteName = (sites, keyword_list) => {
  return sites.filter(function(site) {
    return keyword_list.some(function(keyword) {
      return checkLength(keyword) && (site.siteName.toLowerCase().includes(keyword.trim().toLowerCase()));
    });
  });
};

const getSitesByCategories = (keyword_list, categories, sites) => {
  let _categories = matchCategoryDescriton(categories, keyword_list);
  return getSitesFromCategories(_categories, sites);
};

const matchCategoryDescriton = (categories, keyword_list) => {
  return categories.filter(function(category) {
    return keyword_list.some(function(keyword) {
      return checkLength(keyword) && (category.description.toLowerCase().includes(keyword.trim().toLowerCase()));
    });
  });
};

const getSitesFromCategories = (categories, sites) => {
  return sites.filter(function(site) {
    return categories.some(function(category) {
      return site.categoryIds.includes(category.id);
    });
  });
};
