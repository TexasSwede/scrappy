function Footer(props) {
    let yearFirst = 2023;
    let yearCurrent = new Date().getFullYear();
    return (
        <footer className="App-footer">
            <div className="copyright">
                Copyright &copy; Karl-Henry Martinsson {yearFirst}{(yearCurrent>yearFirst) ? `-${yearCurrent}` : ""}
            </div>
        </footer>
    );
}

export default Footer;