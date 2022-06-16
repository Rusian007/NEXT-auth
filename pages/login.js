import { getCsrfToken } from "next-auth/client"
import Head from 'next/head'
import loginpic from '../public/pic3.png';
import Image from 'next/image'
import styles from'../lib/Css/loginStyle.module.css'
import { useRouter } from "next/router";
import SignInError from "../lib/components/signin"

export default function SignIn({ csrfToken }) {
  const { error } = useRouter().query
  const router = useRouter()

  return (
    <>
    <Head>
        <title>Login !</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className={styles.body}>
    <div className={styles.area} >
                <ul className={styles.circles}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
        </div >

        <section className={styles.section}>
          <div className={styles.container}>

            <div className={styles.img}>
              <Image src={loginpic} width={520} height={500} quality={100} alt="Illustration" />
            </div>

            <div className={styles.form_div}>
              <h1>Login</h1>

              <form action="./api/auth/callback/credentials" method="POST">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              {error && <SignInError error={error} />}
                <div className={styles.inputs}>
                  <div className={styles.field}>
                    <label>
                      <input name="username" id="input-username-for-credentials-provider" type="text" placeholder=" " required autoComplete="off"/>
                      <p>Username</p>
                    </label>
                  </div>

                  <div className={styles.field}>
                    <label>
                      <input name="password" id="input-password-for-credentials-provider" type="password" placeholder=" "/>
                      <p>Password</p>
                    </label>
                  </div>
                </div>


                <div className={styles.buttons_center}>
                  <button className={`${styles.btn} ${styles.bg_purple}`} type="submit">Login</button>

                  <p>Not Signed up yet ?</p>
                  <button type="button" onClick={() => router.push('/register')} className={`${styles.btn} ${styles.bg_purple}`}>Sign Up</button>
                </div>

              </form>
            </div>

          </div>
        </section>
        </div>

    </>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}
