import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
    owner: {
        avatar_url: string;
    }
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/waizbart/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    console.log(repositories)

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <img src={repositories[0]?.owner.avatar_url}></img>
            <h2>Guilherme Waizbart</h2>
            <ul>
                {repositories.map(repo => {
                    return <RepositoryItem key={repo.name} repository={repo} />
                })}
            </ul>
        </section>
    )
}