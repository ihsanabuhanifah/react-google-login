import { GoogleLogin } from "react-google-login";
import { useNavigate, userNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();
  const responseGoogleRegister = async (response) => {
    console.log(response.tokenId);
    const url = "";
    let googleRegister = await axios.post(url, { token: response.tokenId });
    console.log(googleRegister);
    if (googleRegister.data.status === "Success") {
      return navigate("dashboard");
    }
    console.log(googleRegister);
  };

  const responseGoogleLogin = async (response) => {
    console.log(response.tokenId);
    const url = "";
    
  };

  
  return (
    <div>
      <h2>login</h2>
      <GoogleLogin
        clientId={
          ""
        }
        buttonText="Register"
        onSuccess={responseGoogleRegister}
        onFailure={responseGoogleRegister}
        cookiePolicy={"single_host_origin"}
        popup={false}
      />

      <GoogleLogin
        clientId={
          ""
        }
        buttonText="Login"
        onSuccess={responseGoogleLogin}
        onFailure={responseGoogleLogin}
        cookiePolicy={"single_host_origin"}
        popup={false}
      />
    </div>
  );
}
