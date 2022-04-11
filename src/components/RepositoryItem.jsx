export function RepositoryItem(repository) {
    return (
        <li>
            <strong>{repository.repository.name}</strong>
            <p>{repository.repository.description}</p>

            <a href={repository.repository.html_url}>
                Acessar repositório
            </a>
        </li>
    )
}