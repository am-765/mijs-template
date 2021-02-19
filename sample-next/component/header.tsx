export default function Header () {
    return(
        <div>
            <header id="header" className="wrapper">
                <h1 className="site-title"><a href="index.html"><img src="./logo.svg" alt="Profile"></img></a></h1>
                <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#bicycle">Bicycle</a></li>
                </ul>
                </nav>
            </header>
        </div>
    )
}