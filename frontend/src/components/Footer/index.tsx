function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/gustamds"
            target="_blank"
            rel="noreferrer"
          >
            Gustavo Mariano
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React 4.0</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://instagram.com/gusta.mds"
              target="_blank"
              rel="noreferrer"
            >
              @gusta.mds
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
