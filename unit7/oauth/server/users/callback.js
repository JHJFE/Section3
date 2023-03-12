require('dotenv').config();
const axios = require('axios');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// 유어클래스 [소셜 로그인 로직 플로우]에서 6-7 번의 과정인듯, 인증코드로 엑세스 토큰 발급받기

module.exports = async (req, res) => {
  // req의 body로 authorization code가 들어옵니다. console.log를 통해 서버의 터미널창에서 확인해보세요!
  console.log(req.body);
  // authorization code를 이용해 access token을 발급받기 위한 post 요청을 보냅니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/free-pro-team@latest/developers/apps/identifying-and-authorizing-users-for-github-apps#2-users-are-redirected-back-to-your-site-by-github
  try {
    const result = await axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token`,
      headers: {
        accept: 'application/json',
      },
      data: { // 필수 전달 파라미터 - client_id, cliend_secret, code    옵션 - redirect_uri(인증후 어디로 보내질지 , 토큰에서 발급하고 유저인포로 가서 토큰 오면 검증했던거 처럼)
        client_id: CLIENT_ID, 
        client_secret: CLIENT_SECRET,
        code: req.body.authorizationCode,
      },
    });//응답의 결과로 하단의 구조를 한 객체 옴
    // {
    //   "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a", // 엑세스 토큰
    //   "expires_in": 28800, // 엑세스 만료시간
    //   "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",//refresh 토큰
    //   "refresh_token_expires_in": 15811200, // refresh 만료시간 (무조건 엑세스 보다 길거임)
    //   "scope": "", // 뭔지는 모르겠지만 여기서 부여한 '범위'에서의 데이터만 조회가능한듯?
    //   "token_type": "bearer" // 토큰 인증 타입을 명시 - bearer의 경우 JWT 혹은 OAuth에 대한 토큰 사용, Basic의 경우 Base64로 인코딩
    // }
    console.log('result',result)
    const accessToken = result.data.access_token; // 엑세스 토큰
    console.log('엑세스토큰',accessToken)
    return res.status(200).send({ accessToken }); // 엑세스 토큰 담아서 응답으로 줌
  } catch (err) {
    return res.status(401).send({ message: 'error' }); // 에러 발생시, 401 에러
  }
};
