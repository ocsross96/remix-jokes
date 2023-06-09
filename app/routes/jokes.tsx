import { useEffect } from 'react';
import { User } from '@prisma/client';
import {
  Link,
  LinksFunction,
  LoaderFunction,
  useLoaderData,
  Form,
  Outlet,
} from 'remix';
import { db } from '~/utils/db.server';
import { getUser } from '~/utils/session.server';

import stylesUrl from '../styles/jokes.css';

export let links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ];
};

type LoaderData = {
  user: User | null;
  jokeListItems: Array<{ id: string; name: string }>;
};

export let loader: LoaderFunction = async ({ request }) => {
  let jokeListItems = await db.joke.findMany({
    take: 10,
    select: { id: true, name: true },
    orderBy: { createdAt: 'desc' },
  });
  let user = await getUser(request);
  let data: LoaderData = {
    jokeListItems,
    user,
  };
  return data;
};

export default function JokesRoute() {
  let data = useLoaderData<LoaderData>();
  console.log('jokes route');

  useEffect(() => {
    console.log(' useEffect');
  }, []);

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              prefetch="intent"
              to="/"
              title="Remix Jokes"
              aria-label="Remix Jokes"
            >
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
          {data.user ? (
            <div className="user-info">
              <span>{`Hi ${data.user.username}`}</span>
              <Form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </Form>
            </div>
          ) : (
            <Link prefetch="intent" to="/login">
              Login
            </Link>
          )}
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link prefetch="intent" to=".">
              Get a random joke
            </Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {data.jokeListItems.map(joke => (
                <li key={joke.id}>
                  <Link prefetch="intent" to={joke.id}>
                    {joke.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link prefetch="intent" to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
