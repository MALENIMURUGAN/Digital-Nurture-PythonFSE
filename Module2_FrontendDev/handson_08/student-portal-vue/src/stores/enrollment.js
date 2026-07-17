import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useEnrollmentStore = defineStore('enrollment', () => {

  const enrolledCourses = ref([])

  const totalCredits = computed(() =>
    enrolledCourses.value.reduce((sum, c) => sum + c.credits, 0)
  )

  function enroll(course) {
    enrolledCourses.value.push(course)
  }

  function unenroll(code) {
    enrolledCourses.value =
      enrolledCourses.value.filter(c => c.code !== code)
  }

  return {
    enrolledCourses,
    totalCredits,
    enroll,
    unenroll
  }
})