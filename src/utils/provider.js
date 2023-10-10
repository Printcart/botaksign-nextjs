"use client";
import { QueryClient, QueryClientProvider } from "react-query";

const Providers = ({ children }) => {
  // QueryClient config
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default Providers;