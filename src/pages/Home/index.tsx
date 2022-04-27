import { useState } from 'react';
import AddTask from '../../components/molecule/AddTask';
import Tasks from '../../components/molecule/Tasks';
import { Container } from '../../styles/global';

const Home = () => {
    const [tasks, setTasks] = useState([
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
    return (
        <Container>
            <div>
                <AddTask />
                <Tasks tasks={tasks} />
            </div>
        </Container>
    );
};

export default Home;
