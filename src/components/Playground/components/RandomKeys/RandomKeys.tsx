import React from 'react';

import { useAppSelector } from '../../../../app/hooks';

import { TypographyHeader } from '../../../UI';

import RandomArrows from './RandomArrows';
import WelcomeText from './WelcomeText';

import styles from './RandomKeys.module.css';


interface IRandomKey {
    isTimerActive: boolean;
}

const RandomKeys: React.FC<IRandomKey> = (props) => {
    const { isTimerActive } = props;
    const { steps } = useAppSelector((state) => state.playground);

    return (
        <div>
            <TypographyHeader>RandomKeys</TypographyHeader>
            {steps.length ? <RandomArrows/> : <WelcomeText isTimerActive={isTimerActive}/>}
        </div>
    );
};

export default RandomKeys;
