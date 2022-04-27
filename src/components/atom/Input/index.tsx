import { CardInput } from './style';

interface TypeProps {
    type: string;
    onChange?: any;
    value: any;
}

const Input = ({ type, onChange, value }: TypeProps) => {
    return (
        <CardInput>
            <input onChange={onChange} value={value} type={type} />
        </CardInput>
    );
};

export default Input;
