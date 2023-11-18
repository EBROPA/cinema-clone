import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { removeUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const DemoHomePage = () => {
  const { isAuth, email } = useAuth();
  const negative = useNavigate();
  const dispatch = useDispatch();

  if (isAuth) {
    return (
      <div>
        <h1>Welcome</h1>

        <button onClick={() => dispatch(removeUser())}>
          Log out from {email}
        </button>
      </div>
    );
  } else {
    negative("/mypage");
    return null;
  }
};

export default DemoHomePage;
