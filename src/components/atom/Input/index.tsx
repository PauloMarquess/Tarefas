import { CardInput } from './style';

interface TypeProps {
    type: string;
}

const Input = ({ type }: TypeProps) => {
    return (
        <CardInput>
            <input type={type} />
        </CardInput>
    );
};

export default Input;
