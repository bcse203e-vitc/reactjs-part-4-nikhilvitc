import React, { useState, useEffect, Component } from "react";
import "./App.css";

// 1. Greeting Component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// 2. Counter Class Component
class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

// 3. Counter Functional Component with Hooks
function CounterFunction() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

// 4. UserList Component
function UserList({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

// 5. Theme Switcher
function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={theme}>
      <h2>Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

// 6. Fetch User Data with useEffect
function FetchUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.website}
        </li>
      ))}
    </ul>
  );
}

// 7. Form Handling Component
function FormHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

// 8. Track Window Resize
function WindowResizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <h2>Window Width: {width}px</h2>;
}

// 9. Parent-Child Communication
function Parent() {
  const [message, setMessage] = useState("Hello");
  return (
    <div>
      <h2>{message}</h2>
      <Child updateMessage={() => setMessage("Updated!")} />
    </div>
  );
}
function Child({ updateMessage }) {
  return <button onClick={updateMessage}>Change Parent Message</button>;
}

// 10. Stopwatch
function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => setTime((t) => t + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);
  return (
    <div>
      <h2>Time: {time} sec</h2>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => { setTime(0); setIsRunning(false); }}>Reset</button>
    </div>
  );
}

// App Component
function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Jane" />
      <CounterClass />
      <CounterFunction />
      <UserList users={["Alice", "Bob", "Charlie"]} />
      <ThemeSwitcher />
      <FetchUsers />
      <FormHandling />
      <WindowResizeTracker />
      <Parent />
      <Stopwatch />
    </div>
  );
}

export default App;
