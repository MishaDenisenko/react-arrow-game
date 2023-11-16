import React from 'react';
import cn from 'classnames';

import {
    Typography as MaterialTypography,
    TypographyProps as MaterialTypographyProps,
} from '@mui/material';

import styles from './TypographyText.module.css';


interface ITypographyText extends MaterialTypographyProps {
}

const TypographyText: React.FC<ITypographyText> = (props) => {
    const { children, className } = props;

    return (
        <MaterialTypography {...props} className={cn(styles.text, className)}>
            {children}
        </MaterialTypography>
    );
};

export default TypographyText;