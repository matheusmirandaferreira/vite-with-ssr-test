import axios from 'axios';
import { Suspense, use } from 'react';
import { Button } from './ui/button';

type ReposProps = {
  fetchRepos(): Promise<RepoParams[]>;
};

type RepoParams = {
  id: number;
  name: string;
  description: string;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  language: string;
  topics: string[];
};

async function fetchRepos() {
  const { data } = await axios.get<RepoParams[]>(
    'https://api.github.com/users/matheusmirandaferreira/repos',
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
      },
    },
  );

  return data;
}

export function Repos() {
  return (
    <Suspense fallback={<div>Carregando ...</div>}>
      <ReposLoaded fetchRepos={fetchRepos} />
    </Suspense>
  );
}

function ReposLoaded({ fetchRepos }: ReposProps) {
  const repos = use(Promise.resolve(fetchRepos()));

  console.log('repos', repos);

  return (
    <>
      <Button onClick={fetchRepos}>Reload</Button>
      <ul>
        {repos.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
