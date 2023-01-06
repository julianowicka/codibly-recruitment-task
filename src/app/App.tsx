import React from 'react';
import {ProductTable} from "../page/productTable/ProductTable";
import {QueryClient, QueryClientProvider} from "react-query";


const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>

            <ProductTable/>
        </QueryClientProvider>

    );
}

export default App;
