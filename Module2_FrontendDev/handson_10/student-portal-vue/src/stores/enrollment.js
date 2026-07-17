import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getCourseById } from "../api/courseApi";

export const useEnrollmentStore = defineStore("enrollment", () => {

  const enrolledCourses = ref([]);

  const totalCredits = computed(() =>
    enrolledCourses.value.length * 3
  );

  function enroll(course) {
    if (!enrolledCourses.value.find(c => c.id === course.id)) {
      enrolledCourses.value.push(course);
    }
  }

  function unenroll(courseId) {
    enrolledCourses.value =
      enrolledCourses.value.filter(c => c.id !== courseId);
  }

  // Advanced Pinia Async Action
  async function fetchAndEnroll(courseId) {
    const course = await getCourseById(courseId);
    enroll(course);
  }

  // Reset Store
  function $reset() {
    enrolledCourses.value = [];
  }

  return {
    enrolledCourses,
    totalCredits,
    enroll,
    unenroll,
    fetchAndEnroll,
    $reset
  };
});