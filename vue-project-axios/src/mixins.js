import axios from "axios";

export default {
  created: function () {
    this.$api = axios.create({
      baseURL: "https://01686eb5-dc36-437b-8b1b-870e3176d0b4.mock.pstmn.io",
    });
  },
  methods: {
    $get: async function (url, data) {
      return await this.$api
        .get(url, data)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    },
    $post: async function (url, data) {
      return await this.$api
        .post(url, data)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    },
    $put: async function (url, data) {
      return await this.$api
        .put(url, data)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    },
    $patch: async function (url, data) {
      return await this.$api
        .patch(url, data)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    },
    $delete: async function (url, data) {
      return await this.$api
        .delete(url, data)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    },
  },
};
