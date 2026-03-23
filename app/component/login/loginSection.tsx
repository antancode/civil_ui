"use client";
import styles from "./login.module.scss";

export default function Login() {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.logo}>CIVIL</div>

      <div className={styles.card}>
        <h2>Sign in to account</h2>
        <p className={styles.subtitle}>
          Enter your email & password to login
        </p>

        <div className={styles.formGroup}>
          <label>Email Address</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <div className={styles.passwordField}>
            <input type="password" placeholder="Enter Password" />
            <span className={styles.eye}>👁️</span>
          </div>
        </div>

        <div className={styles.forgot}>Forgot Password?</div>

        <button className={styles.signIn}>Sign in</button>

        <div className={styles.roles}>
          <button>Admin</button>
          <button>User</button>
        </div>

        <div className={styles.divider}>
          <span>Or Sign in with</span>
        </div>

        <div className={styles.socials}>
          <button className={styles.google}>Google</button>
          <button className={styles.facebook}>facebook</button>
        </div>

        <p className={styles.signup}>
          Don't have account? <span>Create Account</span>
        </p>
      </div>
    </div>
  );
}