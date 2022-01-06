import { Link } from 'react-router-dom';
import './aside.css';

const Aside = () => {
    return (
        <>
            <aside className="aside">
            <h1 className="col-sm-7">Matheus Oliveira</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projetos</Link></li>
                </ul>
            </nav>
            </aside>
        </>
    )
}

export default Aside