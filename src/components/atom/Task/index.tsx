import { Card, CardCompleted } from './style';

const Task = ({ task, handleTaskClick }: any) => {
    console.log(handleTaskClick);
    return (
        <div
            onClick={() => {
                handleTaskClick(task.id);
            }}
        >
            {task.completed ? (
                <div>
                    <CardCompleted>{task.title}</CardCompleted>
                </div>
            ) : (
                <div>
                    <Card>{task.title}</Card>
                </div>
            )}
        </div>
    );
};

export default Task;
