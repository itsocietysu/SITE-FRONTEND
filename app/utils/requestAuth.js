import request from './request';
import { getSession } from '../cookieManager';

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function requestAuth(url, options) {
  let optionsAuth;
  if (options)
    optionsAuth = Object.assign(options, {
      headers: {
        authorization: `Bearer ${getSession()} each`,
      },
    });
  else
    optionsAuth = {
      headers: {
        authorization: `Bearer ${getSession()} each`,
      },
    };
  return request(url, optionsAuth);
}
