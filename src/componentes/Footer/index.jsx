import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/Alvblackout/">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/AlvBlackout">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/andyblackout/">
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <strong>Desarrollado por Alvaro Nieves</strong>
    </footer>
}

export default Footer