import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DataQuery from "./components/use-query-test";
import TailwindTest from "./components/tailwind-test";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TailwindTest />
      <DataQuery />
    </QueryClientProvider>
  );
};

export default App;
