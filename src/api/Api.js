import { getSites } from './searchHelper.js';
import {sites, categories} from './dataSource';

export default class API {
  static getShowSites(_keyword) {
    return getSites(_keyword, categories, sites);
  }
}
