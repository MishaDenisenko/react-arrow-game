import React from 'react';

import { TypographyText } from '../../../../UI';


import styles from './ResultMessage.module.css';

interface IResultMessage {
    isSuccessEndGame: boolean;
}

const ResultMessage: React.FC<IResultMessage> = (props) => {
    const { isSuccessEndGame } = props;

    return (
        <div className={styles.wrapper}>
            {isSuccessEndGame
                ? <TypographyText className={styles.text}>Congratulations<br/>you win</TypographyText>
                : <TypographyText className={styles.text}>My regrets<br/>you lose</TypographyText>
            }
        </div>
    );
};

export default ResultMessage;