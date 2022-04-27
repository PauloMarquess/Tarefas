import Task from '../../atom/Task';

const Tasks = ({ tasks }: any) => {
    return (
        <div>
            {tasks.map((task: any) => (
                <Task task={task} />
            ))}
        </div>
    );
};

export default Tasks;
