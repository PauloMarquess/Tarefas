import { useState } from 'react';
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
        {
            id: '3',
            title: 'Estudar Programação',
            completed: false,
        },
        {
            id: '4',
            title: 'Estudar Programação',
            completed: false,
        },
    ]);
    return (
        <Container>
            <div>
                <Tasks tasks={tasks} />
            </div>
        </Container>
    );
};

export default Home;
