import { Card } from './style';

const Task = ({ task, handleTaskClick }: any) => {
    console.log(handleTaskClick);
    return (
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
    );
};

export default Task;
