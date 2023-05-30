import React from "react";
import useApi from "../hooks/useApi";

export const CheckoutPage = () => {
    const { data}  = useApi('comments')
    console.log(
        'data', data
    );

    return (<div>CheckoutPage
        <hr />
    </div>)
}

export default CheckoutPage
