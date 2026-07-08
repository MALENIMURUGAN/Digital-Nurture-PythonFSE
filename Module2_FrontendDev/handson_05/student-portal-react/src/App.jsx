import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";

import courseData from "./data";

function App() {

  const [courses, setCourses] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Step 71–73
  useEffect(() => {

    async function loadCourses() {

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        if (!response.ok) {
          throw new Error("Unable to load courses.");
        }

        await response.json();

        // Use local course data
        setCourses(courseData);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }

    }

    loadCourses();

  }, []);

  // Step 75
  useEffect(() => {

    console.log("Courses updated");

  }, [courses]);

  function handleEnroll(id) {

    const selectedCourse = courses.find(course => course.id === id);

    if (
      selectedCourse &&
      !enrolledCourses.some(course => course.id === id)
    ) {

      setEnrolledCourses([
        ...enrolledCourses,
        selectedCourse
      ]);

    }

  }

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {

    return <h2>Loading...</h2>;

  }

  if (error) {

    return <h2>{error}</h2>;

  }

  return (
    <>

      <Header
        siteName="Student Portal"
        enrolledCount={enrolledCourses.length}
      />

      <main>

        <h2>Available Courses</h2>

        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <div className="course-grid">

          {filteredCourses.map(course => (

            <CourseCard
              key={course.id}
              {...course}
              onEnroll={handleEnroll}
            />

          ))}

        </div>

        <StudentProfile />

      </main>

      <Footer />

    </>
  );
}

export default App;