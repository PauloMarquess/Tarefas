import Task from '../../atom/Task';

const Tasks = ({ tasks, handleTaskClick }: any) => {
    return (
        <div>
            {tasks.map((task: any) => (
                <Task task={task} handleTaskClick={handleTaskClick} />
            ))}
        </div>
    );
};

export default Tasks;
