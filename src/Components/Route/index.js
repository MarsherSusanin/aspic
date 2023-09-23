import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Error from "../Pages/Error";
import Upload from "../Pages/Upload";
import UploadSettings from "../Pages/UploadSettings";
import Video from "../Pages/Video";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/upload",
    element: <Upload />,
    errorElement: <Error />,
  },
  {
    path: "/upload/:id",
    element: <UploadSettings />,
    errorElement: <Error />,
  },
  {
    path: "/video/:id",
    element: <Video />,
    errorElement: <Error />,
  },
  // {
  //     path: '/upload',
  //     element: <Upload />,
  //     errorElement: <Error />,
  //     children: [
  //         {
  //             path: '/upload/:id',
  //             element: <UploadSettings />,
  //             errorElement: <Error />
  //         }
  //     ]
  // }
]);

export default route;
