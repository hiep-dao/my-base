import { Routes, Route } from "react-router-dom";
import { ReactElement } from "react";
import { RouteDef } from "@/types/route";
import PrivateRoute from "./PrivateRoute";
import { privateRoutes, publicRoutes } from "@/routes";
import { IRole } from "@/types/auth";

interface TypeRenderComponent {
  component: JSX.Element;
  auth?: boolean;
  roles?: IRole[];
}

interface TypeRenderRoute {
  route: RouteDef;
  auth?: boolean;
}

const RootNavigator = () => {
  const renderComponent = (
    props: TypeRenderComponent,
  ): ReactElement<any, any> | null => {
    const { component, auth = false, roles = [] } = props;
    if (!component) return <div>404 page not found</div>;

    const Page = () => component;

    if (auth) {
      return (
        <PrivateRoute roles={roles}>
          <Page />
        </PrivateRoute>
      );
    }

    return <Page />;
  };

  const renderRoute = (props: TypeRenderRoute) => {
    const { route, auth = false } = props;
    const componentWillRender = {
      component: route.component,
      auth,
      roles: route?.roles,
    };
    if (route.child && route.child.length > 0) {
      return (
        <Route
          path={route.path}
          element={renderComponent(componentWillRender)}
          key={route.name}
        >
          {route.child.map((routeChild) => renderRoute({ route: routeChild }))}
        </Route>
      );
    }

    return (
      <Route
        index={route.index}
        path={route.path}
        element={renderComponent(componentWillRender)}
        key={route.name}
      />
    );
  };

  return (
    <Routes>
      {publicRoutes.map((route) => {
        return renderRoute({ route });
      })}
      {privateRoutes.map((route) => {
        return renderRoute({ route, auth: true });
      })}
    </Routes>
  );
};

export default RootNavigator;
