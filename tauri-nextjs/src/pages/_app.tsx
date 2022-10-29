import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";

import TasksProvider from "../context_providers/TasksProvider";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  );
}
