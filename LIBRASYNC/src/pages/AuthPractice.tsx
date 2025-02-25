import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export interface User {
  id: number,
  username: string,
  password: string,
  role: string,
}

export interface LoginRequest{
  username: string,
  password: string,
}

export const AuthPractice = () => {
  const nagivate = useNavigate();
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const fetchUser = async () => {
    try {
      const response = await fetch('https://localhost:44336/api/User');
      
      if(!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data:User[] = await response.json();
      setUser(data);
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:44336/api/User/login",{
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Invalid credentials.");
        } else {
          throw new Error("Something went wrong. Please try again.");
        }
      }

      const data = await response.json();
      Cookies.set("token", data.token); 
      setError("Login success");
      nagivate("/home");
    } catch (error: string | any) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
  

  return (
    <div className="flex flex-col border h-screen w-screen justify-evenly items-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-2 border p-20">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter username"
          className="border text-sm"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          className="border text-sm"
        />
        <button type="submit" className="text-sm border bg-blue-500 font-semibold text-white p-2">Login</button> {/* Remove onClick */}
      </form>
      <div>
        {error && <p>{error}</p>} 
        {user.map(user => (
          <div key={user.id}> 
            {user.username} - {user.role}
          </div>
        ))}
      </div>
    </div>
  )
}