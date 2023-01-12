import React from 'react';
import {ProductTableEntry} from "../page/productTable/ProductTableEntry";
import {QueryClient, QueryClientProvider} from "react-query";


const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>

            <ProductTableEntry/>
        </QueryClientProvider>

    );
}

export default App;
