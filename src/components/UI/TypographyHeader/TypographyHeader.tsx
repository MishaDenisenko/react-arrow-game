import React from 'react';
import cn from 'classnames';

import {
    Typography as MaterialTypography,
    TypographyProps as MaterialTypographyProps,
} from '@mui/material';

import styles from './TypographyHeader.module.css';


interface ITypographyHeader extends MaterialTypographyProps { }

const TypographyHeader: React.FC<ITypographyHeader> = (props) => {
    const { children, className = '' } = props;

    return (
        <MaterialTypography variant={'h3'} {...props} className={cn(styles.text, className)}>
            {children}
        </MaterialTypography>
    );
};

export default TypographyHeader;