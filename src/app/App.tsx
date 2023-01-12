import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import {ProductTableContainer} from "../page/productTable/component/ProductTableContainer";

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ProductTableContainer />
    </QueryClientProvider>
  );
}

export default App;
