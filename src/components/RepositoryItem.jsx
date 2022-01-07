export function RepositoryItem(props) {
    return (
        <li>
            <strong>{ props.repository.name ?? 'Default' }</strong>
            <p>{ props.repository.description ?? 'Descrição default' }</p>

            <a href={ props.repository.link ?? '' } >Acessar repositório</a>
        </li>
    );
}