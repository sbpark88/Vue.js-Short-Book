import axios from "axios";

export default {
  methods: {
    async $api(url, method, data) {
      return (
        await axios({
          url: url,
          baseURL: "https://0000.mock.pstmn.io",
          method: method,
          data: data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
