import {ProductTableResponseModel} from "./model/ProductTableResponseModel";
import {useQuery} from "react-query";
import axios from 'axios';


 export const ProductTable = () => {

    const { data, isError, isLoading } = useQuery(
        'products',
        () => axios.get<ProductTableResponseModel>('https://reqres.in/api/products')
    )

    if(isLoading || !data) {
        return <>Spinner</>
    }

     return(
         <>
             {data.data.data[0].name}
             {isError? <p>Error fetching data</p> : undefined}
         </>
     )
};
