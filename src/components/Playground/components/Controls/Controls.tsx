import React from 'react';
import { Button } from '../../../UI';

import styles from './Controls.module.css';
import { Pause, PlayArrow } from '@mui/icons-material';


interface IControlsProps {
    isTimerActive: boolean;
    setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls: React.FC<IControlsProps> = (props) => {
    const { isTimerActive, setIsTimerActive } = props;

    return (
        <div>
            <Button onClick={() => setIsTimerActive(true)} disabled={isTimerActive} className={styles.button}
                    endIcon={<PlayArrow/>}>
                Play
            </Button>
            <Button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive} className={styles.button}
                    endIcon={<Pause/>}>
                Stop
            </Button>
        </div>
    );
};

export default Controls;
