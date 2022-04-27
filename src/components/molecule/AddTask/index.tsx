import Input from '../../atom/Input';
import Button from '../../atom/Button';
import { CardAdd } from './style';
import { useState } from 'react';

const AddTask = ({ handleTasksAddition }: any) => {
    const [inputData, setInputData] = useState('');
    const handleInputChange = (e: any) => {
        setInputData(e.target.value);
    };
    const handleAddTaskClick = () => {
        handleTasksAddition(inputData);
    };
    return (
        <CardAdd>
            <Input onChange={handleInputChange} value={inputData} type="text" />
            <Button children="add" onClick={handleAddTaskClick} />
        </CardAdd>
    );
};

export default AddTask;
