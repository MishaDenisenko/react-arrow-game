import React from 'react';
import { useDispatch } from 'react-redux';
import { resetState } from '../../store/slice';

interface IModal {
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    isSuccessEndGame: boolean;
}

const Modal: React.FC<IModal> = (props) => {
    const { setIsShowModal, isSuccessEndGame } = props;
    const dispatch = useDispatch();

    const handleOnClick = () => {
        setIsShowModal(false);
        dispatch(resetState());
    };

    return (
        <div>
            {
                isSuccessEndGame
                ? <span>Congratulations<br/>you win</span>
                : <span>My regrets<br/>you lose</span>
            }
            <br/>
            <button onClick={handleOnClick}>Retry</button>
        </div>
    );
};

export default Modal;
