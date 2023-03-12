const axios = require('axios');
const serverResource = require('../../data/data.js');

module.exports = async (req, res) => {
  const { accessToken } = req.body;
  console.log(accessToken)
  // 클라이언트에서 전달받은 access token를 이용해 사용자의 정보를 가져옵니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/rest/users/users#get-the-authenticated-user
  // 이때 요청하는 서버는 Github의 Authorization 서버가 아닌 Resource Server입니다.
  return axios
    .get('https://api.github.com/user', {//OAuth with the user scope, then the response lists public and private profile information.
      headers: {
        Authorization: `token ${accessToken}`, // 정확한 자료를 찾지는 못했지만, 엑세스 토큰 전달해 리소스 서버에 get 요청하면 해당 깃헙 유저 프로필 정보 가져오는 듯
      },
    })
    .then((res) => res.data)
    .then((githubUserData) => {
      res.send({ githubUserData, serverResource }); // 깃헙 유저 데이터와 리서스 서버 데이터를 제공
    })
    .catch((e) => {
      res.sendStatus(403);
    });
};
