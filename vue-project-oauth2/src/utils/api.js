import axios from "axios";

const $api = axios.create({
  // baseURL: 'http://localhost:8080' // Can be omitted as this is the default
});

const $get = async (url, data) => {
  return await $api
    .get(url, data)
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
const $post = async (url, data) => {
  return await $api
    .post(url, data)
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
const $put = async (url, data) => {
  return await $api
    .put(url, data)
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
const $patch = async (url, data) => {
  return await $api
    .patch(url, data)
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
const $delete = async (url, data) => {
  return await $api
    .delete(url, data)
    .then((res) => res.data)
    .catch((e) => console.error(e));
};

export { $api, $get, $post, $put, $patch, $delete };
