import React from 'react';
import { Stack, Chip } from '@mui/material';


import { useAppSelector } from '../../../../app/hooks';

import { TypographyHeader, TypographyText } from '../../../UI';

import styles from './Score.module.css';


const Score: React.FC = () => {
    const { totalFailed, totalSuccess } = useAppSelector(
        (state) => state.playground,
    );

    return (
        <>
            <TypographyHeader>Score</TypographyHeader>

            <TypographyText>
                On error, the "Consecutive successful hits" value is reset to zero
            </TypographyText>

            <Stack direction={'row'} spacing={1}>
                <Chip className={styles.chipUnsuccess} variant={'outlined'} label={
                    <>
                        Errors:
                        <TypographyText className={styles.counter}>{totalFailed}</TypographyText>
                    </>
                }/>

                <Chip className={styles.chipSuccessful} variant={'outlined'} label={
                    <>
                        Successful:
                        <TypographyText className={styles.counter}>{totalSuccess}</TypographyText>
                    </>
                }/>
            </Stack>
        </>
    );
};

export default Score;
