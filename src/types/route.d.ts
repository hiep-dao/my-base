export interface RouteDef {
  name: string;
  component: JSX.Element;
  path: string;
  auth?: boolean;
  roles?: RoleBase[];
  index?: boolean; // A child route with no path that renders in the parent's outlet at the parent's URL.
  key?: string;
  layout?: React.ReactNode;
  child?: RouteDef[];
}
