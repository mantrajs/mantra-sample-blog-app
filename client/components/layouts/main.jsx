const Layout = ({content}) => (
  <div>
    <header>
    <h1>My Blog Post</h1>
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>Thank you for reading my blog.</small>
    </footer>
  </div>
);

export default Layout;
