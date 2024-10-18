import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.light.css';

import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Root from "./router/root";

function App() {
  return (
    <Suspense>
      <RouterProvider router={Root} />
    </Suspense>
  );
}

export default App;