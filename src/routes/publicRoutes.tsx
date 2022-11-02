import Home from "@/pages/Home";
import { RouteDef } from "@/types/route";

const publicRoutes: RouteDef[] = [
  {
    path: "/",
    name: "Home",
    component: <Home />,
  },
];

export default publicRoutes;
