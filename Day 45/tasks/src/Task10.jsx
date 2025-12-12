import React, { useState } from "react";

function Task10() {
  const [form, setForm] = useState({
    feedback: "",
    rating: "",
    agree: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Final Feedback Data:", form);
    alert("Feedback submitted! Check console for data.");
  }

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        {/* TEXT INPUT */}
        <label>Write your feedback:</label>
        <br />
        <textarea
          name="feedback"
          rows="3"
          onChange={handleChange}
          value={form.feedback}
          placeholder="Enter your comments"
        />
        <br /><br />

        {/* NUMBER RATING */}
        <label>Rating (1 - 5):</label>
        <br />
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={form.rating}
          onChange={handleChange}
          placeholder="Enter rating"
        />
        <br /><br />

        {/* CHECKBOX */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          I agree to share my feedback
        </label>
        <br /><br />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={!form.feedback || !form.rating || !form.agree}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Task10;
