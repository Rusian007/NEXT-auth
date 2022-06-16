import { signIn, signOut, useSession } from "next-auth/client";
import styles from "../lib/Css/landing.module.css";
import Image from 'next/image'
import landingpic from '../public/land.png'

export default function Page() {
  const [session, loading] = useSession();

  return (
    <>
      <section class={styles.structure}>
        <header class={styles.heading}>
          <div class={`${styles.mycontainer} ${styles.flex_between}`}>
            <div class={styles.logo}>
              <a href="#">
                <img src="" alt="LOGO" />
              </a>
            </div>
            <nav class={`${styles.main_navgation} ${styles.flex_between}`}>
              <div className="nav-links"></div>

              <div class={styles.nav_buttons}>
                {!session && (
                  <>
                    
                    <button class={styles.landbtn} onClick={() => signIn()}>
                      Login
                    </button>
                  </>
                )}

                {session && (
                  <>
                    <button
                      class={` ${styles.landbtn} ${styles.btn_sm}`}
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </header>

        <main class={styles.main}>
          <section class={styles.landing}>
            <div class={styles.landing_text}>
              <h1 class={styles.h1}>Network for Coed</h1>
              <p class={styles.p}>A tool for students</p>
              <button class={`${styles.landbtn} ${styles.btn_lg}`}>
                Get Started
              </button>
            </div>

            <div class={styles.landing_image}>
            <Image src={landingpic} alt="Illustration"  width={900} quality={80} />
            
            </div>
          </section>
        </main>
      </section>

      <style jsx>{``}</style>
    </>
  );
}
