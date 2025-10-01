import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, //5minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default queryClient;
