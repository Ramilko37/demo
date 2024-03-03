import { useState } from "react";
import sliderImg1 from "../../../images/sliderImage1.png";
import sliderImg2 from "../../../images/sliderImage2.png";
import { useAppDispatch } from "../../../store/store";
import { Login } from "../components/Login/Login";
import { Welcome } from "../components/Welcome/Welcome";
import { setAuthorized } from "../../../store/slices/applicationSlice";

const imagesData = [{ imageUrl: sliderImg1 }, { imageUrl: sliderImg2 }];

export const Unauthorized = () => {
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleWebAppButton = () => {
    setIsLogin(true);
  };

  const handleLogin = () => {
    dispatch(setAuthorized(true));
  };

  return isLogin ? (
    <Login handleLogin={handleLogin} />
  ) : (
    <Welcome handleWebAppButton={handleWebAppButton} imagesData={imagesData} />
  );
};
