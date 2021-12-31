import { useUser } from '@auth0/nextjs-auth0';

import style from "./index.module.css";

export default function PostIndividualPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className={style.profileContainer}>
        <div className={style.profileHeader}>
          <img src={user.picture} alt="User profile picture." className={style.profilePicture} />
        </div>
        <div className={style.profileContent}>
          <p>
            Welcome {user.name}!
          </p>
          <p>
            You're logged in with {user.email}
          </p>
          <a href="/api/auth/logout" className={style.logoutButton}>Logout</a>
        </div>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
};