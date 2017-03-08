import request from '../request';

let baseURL = "";

export let sendEmail = (values) => {

  let qs = "";
  if (values) {
    qs = Object.keys(values).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(values[key]);
    }).join('&');
  }
  return request({method: "POST", url: baseURL + "/send", data: qs, headers: {"Content-type":"application/x-www-form-urlencoded"}})
    .then(data => data = JSON.parse(data));
}
