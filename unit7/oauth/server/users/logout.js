require('dotenv').config();
const axios = require('axios');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

module.exports = (req, res) => {
  const { accessToken } = req.body;
  // 클라이언트에서 전달받은 access token를 이용해 사용자의 권한 부여를 취소합니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/rest/apps/oauth-applications
  axios
    .delete(`https://api.github.com/applications/${CLIENT_ID}/token`, {
      data: {
        access_token: accessToken, // 필수 - 해당 토큰의 소유자 정보 삭제하기 위함
      },
      auth: {
        username: CLIENT_ID, // 필수 
        password: CLIENT_SECRET, // 필수 - 조회해서 삭제하는 듯
      },
    })
    .then(() => {
      res.status(205).send('Successfuly Logged Out'); //성공
    })
    .catch((e) => {
      console.log(e.response); // 실패 에러상태 처리 안해주는 이유가 있나
    });
};
