import { Card, CardButton, CardTask } from './style';
import Button from '../Button';

const Task = ({ task, handleTaskClick, handleTaskDelete }: any) => {
    console.log(handleTaskClick);
    return (
        <CardTask>
            <div
                onClick={() => {
                    handleTaskClick(task.id);
                }}
            >
                {task.completed ? (
                    <Card current>{task.title}</Card>
                ) : (
                    <Card>{task.title}</Card>
                )}
            </div>
            <CardButton>
                <Button
                    children="X"
                    onClick={() => {
                        handleTaskDelete(task.id);
                    }}
                />
            </CardButton>
        </CardTask>
    );
};

export default Task;
