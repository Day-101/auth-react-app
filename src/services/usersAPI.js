import axios from "axios";

const findAllUsers = async () => {
  const response = await axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}api/user`,
    withCredentials: true,
  });
  return await response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { findAllUsers };
