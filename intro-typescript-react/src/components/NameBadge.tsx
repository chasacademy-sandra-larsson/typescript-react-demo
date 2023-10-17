// Practice props

const NameBadge = ({name}) => {
    return (
      <section className="badge">
        <header className="badge-header">
          <h1 className="title">Hello</h1>
          <p>My name is…</p>
        </header>
        <div className="badge-body">
          <p className="badge-name">Sandra</p>
        </div>
        <footer className="badge-footer" />
      </section>
    );
  };
  
  export default NameBadge;