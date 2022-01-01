import './cardGit.css';

const CardGit = (props) => {

    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.language}</p>
                <a href={props.html_url} class="btn btn-primary">Repositorio</a>
            </div>
        </div>
    )
}

export default CardGit;