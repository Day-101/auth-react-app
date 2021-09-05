import axios from "axios";

const findAllUsers = async () => {
  const response = await axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}api/user`,
    withCredentials: true,
  });
  return await response;
};

export default { findAllUsers };
