import React, { useCallback, useEffect } from 'react';

import { MAP_ARROW_CODES } from '../../constants';

import { useAppDispatch } from '../../../../app/hooks';
import { setEnteredValue } from '../../store/slice';
import { useKeyPressedElement } from './hooks';

import { TypographyHeader, TypographyText } from '../../../UI';

import styles from './KeyPressed.module.css';


interface IKeyPressed {
    isTimerActive: boolean;
}

const KeyPressed: React.FC<IKeyPressed> = (props) => {
    const { isTimerActive } = props;
    const keyPressedElement = useKeyPressedElement();
    const dispatch = useAppDispatch();

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            const enteredValue = e.key;

            if (MAP_ARROW_CODES.hasOwnProperty(enteredValue) && isTimerActive) dispatch(setEnteredValue(enteredValue));
        },
        [dispatch, isTimerActive],
    );

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    return (
        <>
            <TypographyHeader>Key Pressed</TypographyHeader>

            <div className={styles.container}>
                <TypographyText>Press the key corresponding to the key in "Random keys"</TypographyText>

                <div className={styles.wrapper}>
                    <span className={styles.icon}>{keyPressedElement}</span>
                </div>
            </div>
        </>
    );
};

export default KeyPressed;
