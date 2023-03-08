const { USER_DATA } = require('../../db/data');
// JWT는 verifyToken으로 검증할 수 있습니다. 먼저 tokenFunctions에 작성된 여러 메서드들의 역할을 파악하세요.
const { verifyToken, generateToken } = require('../helper/tokenFunctions');

module.exports = async (req, res) => {
  
  /*
   * TODO: 토큰 검증 여부에 따라 유저 정보를 전달하는 로직을 구현하세요.
   *
   * Access Token에 대한 검증이 성공하면 복호화된 payload를 이용하여 USER_DATA에서 해당하는 유저를 조회할 수 있습니다.
   * Access Token이 만료되었다면 Refresh Token을 검증해 Access Token을 재발급하여야 합니다.
   * Access Token과 Refresh Token 모두 만료되었다면 상태 코드 401을 보내야합니다.
   */

  
  const { access_jwt, refresh_jwt } = req.cookies;

  if (access_jwt) {
    const accessValid = verifyToken('access', access_jwt);

    if (accessValid) { // 유요한 값이면? 아니면 null 이 담김
      const userInfo = {
        ...USER_DATA.find((user) => user.id === accessValid.id ),
      };

      delete userInfo.password;
      return res.send(userInfo)
    }

  }

  if (refresh_jwt) {
    const refreshValid = verifyToken('refresh', refresh_jwt);

    if (!refreshValid) { // 유요하지 않은 데이터면
      return res.status(401).send('Not Authorized'); // 에러 응답
    }
    // const userInfo = {
    //   ...USER_DATA.find((user) => user.userId === userId && user.password === password),
    // };
    // if(!userInfo){
    //   return res.status(404).send('Not Here');
    // }
        // if (!userInfo.id) {
    //   return res.status(401).send('Not Authorized');
    // }
    const cookieOptions = {
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    };

    const userInfo = {
      ...USER_DATA.find((user) => user.id === refreshValid.id ),// 토큰의 정보와 비교한 데이터
    };

  
    res.cookie('access_jwt', generateToken(userInfo, false), cookieOptions)
   
    delete userInfo.password;
    return res.send(userInfo)


  }
  return res.status(401).send('Not Authorized')
};
