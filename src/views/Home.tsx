import { useAppSelector } from "../store/store";
import { ImageManagerView } from "./ImageManagerView";

import { UnauthorizedView } from "./UnauthorizedView";

export const HomePage = () => {
  const isAuthorised = useAppSelector(
    (state) => state.applicationSlice.authorized,
  );

  if (!isAuthorised) {
    return <UnauthorizedView />;
  }

  return <ImageManagerView />;
};
