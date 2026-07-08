import { useState } from "react";

function StudentProfile() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    semester: ""
  });

  const handleChange = (event) => {

    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });

  };

  return (
    <section className="profile">

      <h2>Student Profile</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={profile.email}
        onChange={handleChange}
      />

      <input
        type="number"
        name="semester"
        placeholder="Semester"
        value={profile.semester}
        onChange={handleChange}
      />

    </section>
  );
}

export default StudentProfile;