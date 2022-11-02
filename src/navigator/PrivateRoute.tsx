import { ReactElement } from "react";
import { Navigate, useLocation, Outlet } from "react-router";
import { RoleBase } from "@/consts/auth";
import { IRole } from "@/types/auth";

interface PrivateRouteProps {
  children?: JSX.Element;
  roles: IRole[];
  redirectPath?: string;
}

const PrivateRoute = (props: PrivateRouteProps): ReactElement<any, any> => {
  const { children, roles, redirectPath = "/" } = props;

  // const { authenticated, currentRole } = null;
  const authenticated = true;
  const currentRole = RoleBase.Administrator;

  // hook
  const location = useLocation();

  // handler
  const canUserAccess = (): boolean => {
    return authenticated && roles?.includes(currentRole);
  };

  if (canUserAccess()) {
    return children || <Outlet />;
  }
  return <Navigate to={redirectPath} state={{ from: location }} replace />;
};

export default PrivateRoute;
