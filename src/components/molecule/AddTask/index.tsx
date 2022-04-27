import Input from '../../atom/Input';
import Button from '../../atom/Button';
import { CardAdd } from './style';

const AddTask = () => {
    return (
        <CardAdd>
            <Input type="text" />
            <Button children="add" onClick={() => {}} />
        </CardAdd>
    );
};

export default AddTask;
