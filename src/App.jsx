import "./App.css";
import Clock from "./components/Clock/Clock";
import gitHubIcon from "./assets/github.svg";

function App() {
  return (
    <div className="page">
      <div className={`app d-flex justify-content-center align-items-center`}>
        <Clock />
      </div>
      <footer class="footer fixed-bottom bg-dark text-white">
        <div class="container text-center">
          <span class="copyright">
            &copy; Nathaniel Daley 2024{" "}
            <a
              href="https://github.com/nathanielDaley/twenty-five-plus-five-clock"
              target="_blank"
            >
              <img src={gitHubIcon}></img>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
