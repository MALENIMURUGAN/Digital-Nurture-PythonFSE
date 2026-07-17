<template>
  <Header />

  <h2>Courses</h2>

  <input
    v-model="searchTerm"
    placeholder="Search Course"
  />

  <CourseCard
    v-for="course in filteredCourses"
    :key="course.code"
    :name="course.name"
    :code="course.code"
    :credits="course.credits"
    :grade="course.grade"
    @enroll="store.enroll(course)"
  />
</template>

<script setup>
import { ref, computed } from 'vue'

import Header from '../components/Header.vue'
import CourseCard from '../components/CourseCard.vue'
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()

const searchTerm = ref('')

const courses = ref([
  { name:'Angular', code:'ANG101', credits:4, grade:'A' },
  { name:'React', code:'REA102', credits:3, grade:'A+' },
  { name:'Python', code:'PY103', credits:4, grade:'A' },
  { name:'Java', code:'JAVA104', credits:3, grade:'B+' },
  { name:'SQL', code:'SQL105', credits:2, grade:'A' }
])

const filteredCourses = computed(() =>
  courses.value.filter(course =>
    course.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)
</script>

<style scoped>
input{
  width:300px;
  padding:10px;
  margin:20px;
}
</style>