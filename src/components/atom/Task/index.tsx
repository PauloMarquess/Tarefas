import { Card } from './style';

const Task = ({ task }: any) => {
    return <Card>{task.title}</Card>;
};

export default Task;
