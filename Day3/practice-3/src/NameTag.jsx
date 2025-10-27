
import React, { useState } from "react";

function NameTag() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleDownload = () => {
    alert(` NAME TAG \nHello, my name is ${name}\n I am a(n) ${title} for ${company}.`);
  };

  return (
    <div className="main" style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems:"center", textAlign: "center", fontFamily: "Arial",}}>
        <div>
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ margin: "5px", padding: "5px" }}
        />
        <br />
        <input
            type="text"
            placeholder="Enter your job title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ margin: "5px", padding: "5px" }}
        />
        <br />
        <input
            type="text"
            placeholder="Enter your company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            style={{ margin: "5px", padding: "5px" }}
        />

        <br />
        <button
            onClick={handleDownload}
            style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#905f28ff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            }}
        >
            Download
        </button>
      </div>

      <div className="name"
        style={{
          border: "2px solid black",
          marginTop: "20px",
          display: "inline-block",
          padding: "15px",
          borderRadius: "10px",
          backgroundColor: "#f3f3f3",
        }}
      >
        <h3>NAME TAG</h3>
        <p>Hello, my name is {name}</p>
        <p>I am a {title}</p>
        <p>I work at {company}</p>
      </div>
    </div>
    
    
  );
}

export default NameTag;
