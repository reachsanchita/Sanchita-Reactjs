import React,{useState} from "react";

const Admin =() => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        window.location.href = "/Adminview"
    }
  return (
    <div class="container">
      <div class="myform">
        <form onSubmit={handleSubmit}>
          <h2>ADMIN LOGIN</h2>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Admin Name" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <button type="submit">LOGIN</button>
        </form>
      </div>
      <div class="image">
        <img src="admin.jpg" width="300px" />
      </div>
    </div>
  );
}
export default Admin;