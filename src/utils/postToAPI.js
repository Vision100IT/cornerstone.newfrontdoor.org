import fetch from 'isomorphic-fetch';
import config from 'react-global-configuration';

export function postToWebform(formData, callback) {
  fetch(config.get("DRUPAL_BASE_URL") + "/webform_submission/submission", {
    method: "POST",
    body: formData
  })
  .then(resp => resp.json())
  .then(function(data) {
    callback(data);
  })
  .catch(function(error){
    console.log(error);
  })
}
