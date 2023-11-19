import React from 'react';

import loader from './img/loader.svg';

import { TypographyText } from '../../../../UI';

import stylesCommon from '../RandomKeys.module.css';
import styles from './WelcomeText.module.css';


interface IWelcomeText {
    isTimerActive: boolean;
}

const WelcomeText: React.FC<IWelcomeText> = (props) => {
    const { isTimerActive } = props;

    return isTimerActive ? (
        <div className={stylesCommon.wrapper}>
            <span className={stylesCommon.icon}>
                <img src={loader} alt={'loader'} className={stylesCommon.icon}/>
            </span>
        </div>
    ) : (
        <TypographyText>
            Press "Play" to start the game and wait for the first arrow to appear
        </TypographyText>
    );
};

export default WelcomeText;
