import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

// api github::: https://api.github.com/users/kemps-medeiros/repos

// const repository = {
//     name: 'unform',
//     description: 'Forms in React',
//     link: 'https://github.com/unform/unform'
// }



export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/kemps-medeiros/repos')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setRepositories(data);
            });
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
                {/* <RepositoryItem /> */}
               

            </ul>
        </section>
    );
}