import { useState } from 'react';
import AddTask from '../../components/molecule/AddTask';
import Tasks from '../../components/molecule/Tasks';
import { Container } from '../../styles/global';
import { v4 as uuidv4 } from 'uuid';
import { MiniContainer } from './style';

const Home = () => {
    const [tasks, setTasks] = useState<any>([
        {
            id: '1',
            title: 'Estudar Programação',
            completed: false,
        },
        {
            id: '2',
            title: 'Ler Livros',
            completed: true,
        },
    ]);
    const handleTaskClick = (tasksId: any) => {
        const newTasks = tasks.map((task: any) => {
            if (task.id === tasksId)
                return { ...task, completed: !task.completed };
            console.log('pegou');
            return task;
        });
        setTasks(newTasks);
    };

    const handleTasksAddition = (tasksTitle: any) => {
        const newTasks = [
            ...tasks,
            {
                title: tasksTitle,
                id: uuidv4(),
                completed: false,
            },
        ];
        setTasks(newTasks);
    };
    const handleTaskDelete = (taskId: any) => {
        const newTasks = tasks.filter(
            (task: { id: any }) => task.id !== taskId
        );
        setTasks(newTasks);
    };

    return (
        <Container>
            <MiniContainer>
                <AddTask handleTasksAddition={handleTasksAddition} />
                <Tasks
                    tasks={tasks}
                    handleTaskClick={handleTaskClick}
                    handleTaskDelete={handleTaskDelete}
                />
            </MiniContainer>
        </Container>
    );
};

export default Home;
