import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { useAuth0 } from "@auth0/auth0-react";
import { Main as MainLayout } from "../src/layouts/main";
import { Provider } from "react-redux";
import { store, useAppSelector } from "./store/store";

import { HomePage } from "./views/Home";

export const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      <Provider store={store}>
        {/* <GoogleOAuthProvider clientId={googleOauthClientId}> */}
        <ChakraProvider theme={theme}>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </ChakraProvider>
        {/* </GoogleOAuthProvider> */}
      </Provider>
    </>
  );
};
