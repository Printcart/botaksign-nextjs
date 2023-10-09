"use client";
import { QueryClient, QueryClientProvider } from "react-query";

const Providers = ({ children }) => {
  // QueryClient config
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 30, // Cache is considered stale after 30 minutes
        cacheTime: 1000 * 60 * 60, // Cache expires after 1 hours
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