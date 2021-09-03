import Head from "next/head";
import Image from "next/image";
import HeadNav from "../components/HeadNav";
import Inputs from "../components/Inputs";
import loginPhoto from "../public/img/loginimage.png";
import LoginModal from "../components/LoginModal";

export default function Home() {
    return (
        <div>
            {/* <Modal title="Registro Exitoso">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quibusdam dolores magni cum id? Consequuntur itaque,
                    reprehenderit reiciendis minus, neque odit unde dolorem
                    saepe similique dolor iste enim explicabo excepturi dolore!
                </p>
            </Modal> */}
            <LoginModal/>
            <Head>
                <title>Make-A-Res</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeadNav />
            <main>
                <div className="screen__login wrapper">
                    <div className="info__login screen__padding">
                        <h1 className="h1">
                            ¡Crea tu hoja de vida de forma rápida y sencilla!
                        </h1>
                        <Image src={loginPhoto} />
                        <h2 className="h2">¡Nosotros lo hacemos por tí!</h2>
                        <p>
                            <b>Make-A-Res</b> es una herramienta diseñada para hacer de tu busqueda de trabajo, un proceso más optimizado y automatizado. Siemplemente ingresa tu información profesional, y nosotros nos encargamos de diseñarte el formato de tu hoja de vida, de acuerdo al cargo que apliques. ¡Es muy fácil!
                        </p>
                    </div>
                    <div className="form__login">
                        <div className="form__container">
                            <div className="form__header">
                                <h3>Registra tu perfil</h3>
                                <p>
                                    <b>Make-A-Res</b> quiere hacer tu busqueda de empleo mas sencilla, solo deja tus datos, crea tu cuenta y empieza a hacer interactiva tu hoja de vida, si ya tienes
                                    cuenta, <b><a href="">ingresa aquí</a></b>
                                </p>
                            </div>
                            <div className="form__box">
                                <form action="">
                                    <Inputs
                                        name="Nombres"
                                        id="name_login"
                                        type="text"
                                    />
                                    <Inputs
                                        name="Apellidos"
                                        id="lastname_login"
                                        type="text"
                                    />
                                    <Inputs
                                        name="Correo"
                                        id="email_login"
                                        type="email"
                                    />
                                    <Inputs
                                        name="Contraseña"
                                        id="email_login"
                                        type="password"
                                    />
                                    <div className="button__submit">
                                        <button
                                            className="btn-nx btn-nx-primary"
                                            type="button"
                                        >
                                            Registrarse
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
