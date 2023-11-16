import React from 'react';
import { useAppSelector } from '../../../../app/hooks';

import RandomArrows from './RandomArrows';
import WelcomeText from './WelcomeText';

interface IRandomKey {
    isTimerActive: boolean;
}

const RandomKeys: React.FC<IRandomKey> = (props) => {
    const { isTimerActive } = props;
    const { steps } = useAppSelector((state) => state.playground);

    return (
        <div>
            <h3>RandomKeys</h3>
            {steps.length ? <RandomArrows/> : <WelcomeText isTimerActive={isTimerActive}/>}
        </div>
    );
};

export default RandomKeys;
