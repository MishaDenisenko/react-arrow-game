import React from 'react';
import cn from 'classnames';

import { Modal as MaterialModal} from '@mui/material';

import { resetState } from '../../store/slice';
import { useAppDispatch } from '../../../../app/hooks';

import { Button, TypographyText } from '../../../UI';

import styles from './Modal.module.css';
import ResultMessage from './ResultMessage';


interface IModal {
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    isSuccessEndGame: boolean;
}

const Modal: React.FC<IModal> = (props) => {
    const { setIsShowModal, isSuccessEndGame } = props;
    const dispatch = useAppDispatch();

    const handleOnClick = () => {
        setIsShowModal(false);
        dispatch(resetState());
    };

    return (
        <MaterialModal open onClose={handleOnClick} className={styles.wrapper}>
            <div className={cn(styles.container, isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess)}>
                <ResultMessage isSuccessEndGame={isSuccessEndGame}/>
                <Button onClick={handleOnClick} className={styles.button}>Retry</Button>
            </div>
        </MaterialModal>
    );
};

export default Modal;
