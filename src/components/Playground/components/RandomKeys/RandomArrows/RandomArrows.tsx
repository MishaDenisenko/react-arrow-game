import React from 'react';
import cn from 'classnames';

import { useAppSelector } from '../../../../../app/hooks';

import { MAP_ARROW_CODES } from '../../../constants';
import { IMapArrowCodes } from '../../../types';

import stylesCommon from '../RandomKeys.module.css';
import styles from './RandomArrows.module.css';

const RandomArrows: React.FC = () => {
    const { steps } = useAppSelector((state) => state.playground);

    const getStylesRandomArrow = (success: boolean | null): string => {
        if (success == null) return '';

        return success ? styles.iconSuccess : styles.iconUnsuccess;
    };

    return (
        <div className={stylesCommon.wrapper}>
            {steps.map(({ step, success, currentValue }) => (
                <span key={step} className={cn(getStylesRandomArrow(success), stylesCommon.icon)}>
                    {MAP_ARROW_CODES[currentValue as keyof IMapArrowCodes]}
                </span>
            ))}
        </div>
    );
};

export default RandomArrows;
