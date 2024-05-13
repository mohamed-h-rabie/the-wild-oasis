import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const FullPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-50);
  align-items: center;
  height: 100vh;
`;
function ProtectedPage({ children }) {
  const navigate = useNavigate();
  //1 get login user inform.
  const { isLoading, isAuth } = useUser();

  //2 if login is  no auth navigate to Login
  useEffect(
    function () {
      if (!isAuth && !isLoading) navigate("/login");
    },
    [isAuth, isLoading, navigate]
  );

  //3 if loading return spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4 if there is user login
  if (isAuth) return <div>{children}</div>;
}

export default ProtectedPage;
