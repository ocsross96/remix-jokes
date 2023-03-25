import type { ActionFunction, LoaderFunction } from 'remix';
import { Link, redirect } from 'remix';
import { logout } from '~/utils/session.server';

export let action: ActionFunction = async ({ request }) => {
  return logout(request);
};

export let loader: LoaderFunction = async () => {
  return redirect('/');
};
