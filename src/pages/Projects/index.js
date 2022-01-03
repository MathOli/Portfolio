
import { Component } from "react/cjs/react.production.min";
import CardGit from "../../components/CardGit";
import api from "../../api";

class Projects extends Component {

    state = {
        repos: [],
    }

    async componentDidMount() {
        const response = await api.get('/repos');

        this.setState({ repos: response.data });
    }

    render() {

        const { repos } = this.state;
        const cards = repos.map(repo => {
            if (repo.name !== 'matholi') {
                return (
                    <CardGit key={repo.id} title={repo.name} language={repo.language} html_url={repo.html_url} />
                );
            }
        }
        );
        return (
            <>
                {cards}
            </>
        );
    }
}

export default Projects;