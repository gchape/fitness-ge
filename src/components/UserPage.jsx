import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useLayoutEffect, useRef } from "react";

import styles from "../css/UserPage.module.css";

function LoginPage() {
  const { login, logout, isAuthenticated, user } = useKindeAuth();
  const loginButtonRef = useRef();

  useLayoutEffect(() => {
    loginButtonRef.current.click();
  }, []);

  return (
    <div className={styles.root}>
      <button
        ref={loginButtonRef}
        onClick={login}
        type="button"
        style={{ display: "none" }}
      >
        Log In
      </button>
      {isAuthenticated && (
        <div className={styles.card}>
          <img className={styles.portrait} src={`${user?.picture}`} alt="" />
          <h1 className={styles.h1}>
            {user?.given_name} {user?.family_name}
          </h1>
          <div className={styles.title}>Software Developer</div>
          <dl>
            <div>
              <dt>Posts</dt>
              <dd>856</dd>
            </div>
            <div>
              <dt>Likes</dt>
              <dd>1358</dd>
            </div>
            <div>
              <dt>Followers</dt>
              <dd>1257</dd>
            </div>
          </dl>
          <p className={styles.summary}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            velit sit! Minus vel repellat molestias!
          </p>
          <ul className={styles.technologies}>
            <li>CSS</li>
            <li>HTML</li>
            <li>React</li>
            <li>JavaScript</li>
          </ul>
          <div className={styles.actions}>
            <button type="button" onClick={logout} className={styles.logout}>
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
