import {ProductTableResponseModel} from "./model/ProductTableResponseModel";
import {useQuery} from "react-query";
import axios from 'axios';
import {ProductTable} from "./component/ProductTable";


 export const ProductTableEntry = () => {

    const { data, isLoading  } = useQuery(
        'products',
        () => axios.get<ProductTableResponseModel>('https://reqres.in/api/products')
    )

    if(isLoading || !data) {
        return <>Spinner</>
    }

     return(
         <>
           <ProductTable products={data.data.data}/>
         </>
     )
};
