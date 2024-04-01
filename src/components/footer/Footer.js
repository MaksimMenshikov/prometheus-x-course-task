import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <p className="footerText">
        Виконано в
        <a
          className="footerText__link"
          href="https://prometheus.org.ua/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Prometheus{" "}
        </a>
        © 2024
      </p>
    </footer>
  );
}
