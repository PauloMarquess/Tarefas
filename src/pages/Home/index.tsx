import { useState } from 'react';
import AddTask from '../../components/molecule/AddTask';
import Tasks from '../../components/molecule/Tasks';
import { Container } from '../../styles/global';

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
            completed: false,
        },
    ]);

    const handleTasksAddition = (tasksTitle: any) => {
        const newTasks = [
            ...tasks,
            {
                title: tasksTitle,
                id: Math.random(),
                completed: false,
            },
        ];
        setTasks(newTasks);
    };
    return (
        <Container>
            <div>
                <AddTask handleTasksAddition={handleTasksAddition} />
                <Tasks tasks={tasks} />
            </div>
        </Container>
    );
};

export default Home;
