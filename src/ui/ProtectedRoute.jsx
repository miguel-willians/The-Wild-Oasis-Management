/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

import Spinner from "./Spinner";

import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Carregar o usuário autenticado
  const { isAuthenticated, isLoading } = useUser();

  // 2. Se não houver nenhum usuário autenticado, redirecionar para /login
  //navigate não pode ser chamado no top level de uma função, por isso o uso do useEffect:
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. Mostrar um spinner enquanto carrega
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. Se houver usuário, renderizar a aplicação
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
