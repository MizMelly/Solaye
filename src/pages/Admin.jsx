import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API = "http://localhost:5000/api";

const Admin = () => {
  const [blogs, setBlogs] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showLogin, setShowLogin] = useState(!token);
  const [loading, setLoading] = useState(false);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
    author: "",
    image: "",
  });

  // FETCH BLOGS
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API}/blogs`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBlogs(res.data);
    } catch (err) {
      toast.error("Failed to fetch blogs");
    }
  };

  useEffect(() => {
    if (token) fetchBlogs();
  }, [token]);

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API}/auth/login`, loginForm);

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setShowLogin(false);

      toast.success("Login successful");
    } catch (err) {
      toast.error("Invalid login");
    }
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setShowLogin(true);
  };

  // INPUT CHANGE (FIXED)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBlogForm((prev) => {
      const updated = { ...prev, [name]: value };
      return updated;
    });
  };

  // IMAGE UPLOAD
  const uploadImage = async (file) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post(
      `${API}/blogs/upload`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data.imageUrl;
  };

  // CREATE BLOG (FIXED DEBUGGING)
  const createBlog = async (e) => {
    e.preventDefault();

    if (!blogForm.title || !blogForm.content) {
      toast.error("Title and content are required");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${API}/blogs`,
        blogForm,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Blog created!");

      setBlogForm({
        title: "",
        content: "",
        author: "",
        image: "",
      });

      fetchBlogs();
    } catch (err) {
      toast.error("Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>

      {/* LOGIN */}
      {showLogin && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Admin Login</h2>

            <form onSubmit={handleLogin} style={styles.form}>
              <input
                placeholder="Email"
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                style={styles.input}
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                style={styles.input}
              />

              <button style={styles.loginBtn}>Login</button>
            </form>
          </div>
        </div>
      )}

      {/* DASHBOARD */}
      {!showLogin && (
        <>
          <div style={styles.header}>
            <h1>Admin Dashboard</h1>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </div>

          {/* CREATE BLOG */}
          <form onSubmit={createBlog} style={styles.card}>
            <h2>Create Blog</h2>

            <input
              name="title"
              placeholder="Title"
              value={blogForm.title}
              onChange={handleChange}
              style={styles.input}
            />

            <textarea
              name="content"
              placeholder="Content"
              value={blogForm.content}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              name="author"
              placeholder="Author"
              value={blogForm.author}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="file"
              onChange={async (e) => {
                const file = e.target.files[0];
                const url = await uploadImage(file);

                if (url) {
                  setBlogForm((prev) => ({
                    ...prev,
                    image: url,
                  }));
                }
              }}
            />

            {blogForm.image && (
              <img
                src={blogForm.image}
                alt="preview"
                style={{ width: "100%", marginTop: 10 }}
              />
            )}

            <button style={styles.primaryBtn} disabled={loading}>
              {loading ? "Publishing..." : "Create Blog"}
            </button>
          </form>

          {/* BLOG LIST */}
          <div style={styles.list}>
            {blogs.map((b) => (
              <div key={b.id} style={styles.blogCard}>
                <h3>{b.title}</h3>
                <p>{b.content}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* 🎨 STYLES */
const styles = {
  page: {
    fontFamily: "Arial",
    padding: "20px",
    minHeight: "100vh",
    background: "#f5f3ff",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    background: "linear-gradient(135deg,#7c3aed,#a855f7)",
    color: "white",
    borderRadius: "10px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },

  primaryBtn: {
    background: "linear-gradient(135deg,#7c3aed,#a855f7)",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  logoutBtn: {
    background: "white",
    color: "#7c3aed",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  list: {
    marginTop: "20px",
  },

  blogCard: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  loginBtn: {
    background: "linear-gradient(135deg,#7c3aed,#a855f7)",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Admin;