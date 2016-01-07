const Layout = ({content = () => null }) => (
  <div>
    <header>
    <h1>Mantra Voice</h1>
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>Mantra is an application architecture for Meteor.</small>
    </footer>
  </div>
);

export default Layout;
