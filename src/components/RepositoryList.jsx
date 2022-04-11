import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'RepositoryList';

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repositoryName=""/>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />     
            </ul>
        </section>
    )
}