import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { setCurrentStep, setFail, setSteps } from './store/slice';
import { END_GAME_CONDITIONS, INTERVAL_TIME } from './constants';

import Controls from './components/Controls';
import RandomKeys from './components/RandomKeys';
import KeyPressed from './components/KeyPressed';
import Score from './components/Score';
import Modal from './components/Modal';

import styles from './Playground.module.css';

const Playground: React.FC = () => {
    const { currentStep, totalSuccess, totalFailed } = useAppSelector(
        (state) => state.playground,
    );
    const dispatch = useAppDispatch();

    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false);

    const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

    const refIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isTimerActive) {
            refIntervalId.current = setInterval(() => {
                dispatch(setFail());
                dispatch(setCurrentStep());
                dispatch(setSteps());
            }, INTERVAL_TIME);
        } else clearInterval(refIntervalId.current as NodeJS.Timeout);

        return () => clearInterval(refIntervalId.current as NodeJS.Timeout);
    }, [isTimerActive, dispatch]);

    useEffect(() => {
        const isSuccessful = totalSuccess === END_GAME_CONDITIONS.successCount;
        const isUnsuccessful = totalFailed === END_GAME_CONDITIONS.failedCount;

        if (!isSuccessful && !isUnsuccessful) return;

        setIsTimerActive(false);

        isSuccessful && setIsSuccessEndGame(true);
        isUnsuccessful && setIsSuccessEndGame(false);

        setIsShowModal(true);
    }, [totalSuccess, totalFailed]);

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <RandomKeys isTimerActive={isTimerActive}/>
                <KeyPressed isTimerActive={isTimerActive}/>
                <Score/>
            </div>

            <div className={styles.column}>
                <Controls isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive}/>
            </div>

            {isShowModal && <Modal isSuccessEndGame={isSuccessEndGame} setIsShowModal={setIsShowModal}/>}
        </div>
    );
};

export default Playground;
