import { Map } from "../pages";
import { Landing } from "../pages";
import { FileUpload } from "../pages";

const routes = [
  {
    title: "Map",
    path: "/map",
    description: "Login Page",
    element: <Map />,
  },
  {
    title: "Landing",
    path: "/",
    description: "Land Page",
    element: <Landing />,
  },
  {
    title: "fileupload",
    path: "/upload",
    description: "Upload Page",
    element: <FileUpload />,
  },
];

export default routes;