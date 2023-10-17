// Practice useState

const Counter = () => {


    return (
      <section>
        <h1>Number of days since...</h1>
        <p>0</p>
        <div>
          <button>➖ Decrement</button>
          <button>🔁 Reset</button>
          <button>➕ Increment</button>
        </div>
        <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="number" value={0} />
          <button type="submit">Update Counter</button>
        </form>
        </div>
      </section>
    );
  };
  
  export default Counter;