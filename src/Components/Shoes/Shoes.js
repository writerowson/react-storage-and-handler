import React from 'react';
import { add, multiply } from '../../Utilities/Calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second)
    const sum = add(first, second)
    return (
        <div>
            <h2>This is Shoes </h2>
            <p>Result : {result} and Sum {sum}</p>
        </div>
    );
};
export default Shoes;