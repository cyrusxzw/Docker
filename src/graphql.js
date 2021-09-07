import React from 'react';
import { gql, useQuery } from '@apollo/client';

const EXCHANGE_RATES = gql`
query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
  }
}
`;

const Grapql = () => {

    const { data } = useQuery(EXCHANGE_RATES);
    return (
        <div>
            {
                data && data.rates.map(({ currency, rate }) => (
                    <div key={currency}>
                        <p>
                            {currency}: {rate}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}


export default Grapql;