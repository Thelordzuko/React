import React, { useState } from "react";

function StudentGrades() {
  const students = [
    { name: "Oluwaseyi Alebiosu", subject: "Math", score: 75 },
    { name: "Amaka Johnson", subject: "Math", score: 45 },
    { name: "Olusola Somorin", subject: "Math", score: 88 },
    { name: "Ada Lovel\ace", subject: "Math", score: 30 },
  ];

  const [filter, setFilter] = useState("All");

  const filteredStudents = students.filter((student) => {
    if (filter === "Passed") return student.score >= 50;
    if (filter === "Failed") return student.score < 50;
    return true;
  });

  const total = students.length;
  const passed = students.filter((s) => s.score >= 50).length;
  const failed = students.filter((s) => s.score < 50).length;

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h2>📚 Student Grades</h2>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Passed")}>Passed</button>
        <button onClick={() => setFilter("Failed")}>Failed</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredStudents.map((student, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {student.name} - {student.subject}: {student.score}{" "}
            {student.score >= 50 ? (
              <span style={{ color: "green" }}>✅ PASS</span>
            ) : (
              <span style={{ color: "red" }}>❌ FAIL</span>
            )}
          </li>
        ))}
      </ul>

      <p>
        Total Students: {total} | Passed: {passed} | Failed: {failed}
      </p>
    </div>
  );
}

export default StudentGrades;
