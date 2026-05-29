import { useRouter } from "next/router";
import { useState } from "react";
import { login } from "../api/authService";
import { toast } from "react-toastify";
import styles from "./login.module.css";

const listaLocais = () => {

    const [nif, setNif] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();
    const notificacao = (msg: string) => toast.error(msg);
    const erro = (msg: string) => toast. error(msg);

    async function autenticar (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            await login(nif, senha);
            notificacao("Login bem sucedido!")

            setTimeout(() => {
                router.push("/home");
            }, 2000)
        } catch (error: any) {
            erro(error.message);
        }
    }



    return (
        <>
            <main className={styles.login_page}>
                <section className={styles.login_banner} aria-label="Apresentação do sistema">
                    <img
                        src="../imgs/Imagem do login.png"
                        alt="Imagem de fundo relacionada à tecnologia"
                        className={styles.banner_image}
                    />
                    <div className={styles.banner_overlay} />
                    <div className={styles.banner_content}>
                        <img
                            src="../imgs/Logo Senai.png"
                            alt="Logo do SENAI"
                            className={styles.senai_logo}
                        />
                        <h2>Gestão de patrimônios</h2>
                        <p className={styles.banner_content_text}>
                            Controle, organização e transparência do patrimônio com eficiência.
                        </p>
                        <p />
                    </div>
                </section>
                <section className={styles.login_area} aria-label="Formulário de login">
                    <form className={styles.login_form} onSubmit = {autenticar}>
                        <h1>Login</h1>
                        <div className={styles.form_group}>
                            <label htmlFor="nif">NIF:</label>
                            <input
                                type="text"
                                id="nif"
                                name="nif"
                                placeholder="Insira o seu NIF"
                                required
                                value={nif} onChange={(e) => setNif(e.target.value)}
                            />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="senha">Senha:</label>
                            <div className={styles.password_field}>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="Insira a sua senha"
                                    required
                                    value={senha} onChange={(e) => setSenha(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className={styles.show_password}
                                    aria-label="Mostrar senha"
                                >
                                    👁
                                </button>
                            </div>
                        </div>
                        <button type="submit" className={styles.login_button}>
                            Entrar
                        </button>
                    </form>
                </section>
            </main>

        </>

    );
};

export default listaLocais;