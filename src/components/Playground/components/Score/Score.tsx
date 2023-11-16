import React from 'react';
import { useAppSelector } from '../../../../app/hooks';

const Score: React.FC = () => {
    const { totalFailed, totalSuccess } = useAppSelector(
        (state) => state.playground,
    );

    return (
        <>
            <h3>Score</h3>
            <span>Failed: {totalFailed}</span>
            <br/>
            <span>Successful: {totalSuccess}</span>
        </>
    );
};

export default Score;
