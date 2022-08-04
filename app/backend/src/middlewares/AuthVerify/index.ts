import AuthVerify from './AuthVerify';
import JWTTokenProvider from '../../providers/implementations/JWTTokenProvider';

const tokenProvider = new JWTTokenProvider();
const authVerify = new AuthVerify(tokenProvider);

export default authVerify;
