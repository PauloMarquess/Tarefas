import Task from '../../atom/Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }: any) => {
    return (
        <div>
            {tasks.map((task: any) => (
                <Task
                    task={task}
                    handleTaskClick={handleTaskClick}
                    handleTaskDelete={handleTaskDelete}
                />
            ))}
        </div>
    );
};

export default Tasks;
