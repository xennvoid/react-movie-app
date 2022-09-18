import React from 'react'
import { IoChevronBackCircleOutline } from 'react-icons/io5';

type Props = {
    className?: string;
    onClick: () => void;
}

const BackButton: React.FC<Props> = ({ className, onClick }) => {

    return (
        <div className={className}>
            <IoChevronBackCircleOutline color="white" size={52} cursor="pointer" onClick={onClick} />
        </div>
    )
}

export default BackButton