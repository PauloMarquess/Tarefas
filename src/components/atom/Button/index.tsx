import { ReactNode } from 'react';
import { CardButton } from './style';

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <CardButton>
            <button onClick={onClick}>{children}</button>
        </CardButton>
    );
};

export default Button;
