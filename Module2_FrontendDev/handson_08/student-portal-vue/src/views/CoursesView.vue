<template>
  <Header />

  <h2>Courses</h2>

  <input
    v-model="searchTerm"
    placeholder="Search Course"
  />

  <CourseCard
    v-for="course in filteredCourses"
    :key="course.id"
    :name="course.title"
    :code="'CSE-' + course.id"
    :credits="3"
    :grade="'A'"
    @enroll="store.enroll(course)"
  />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import Header from "../components/Header.vue";
import CourseCard from "../components/CourseCard.vue";

import { useEnrollmentStore } from "../stores/enrollment";
import { getAllCourses } from "../api/courseApi";

const store = useEnrollmentStore();

const searchTerm = ref("");

const courses = ref([]);

onMounted(async () => {
  try {
    courses.value = await getAllCourses();
    console.log(courses.value);
  } catch (error) {
    console.error(error);
  }
});

const filteredCourses = computed(() =>
  courses.value.filter(course =>
    course.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);
</script>

<style scoped>
input {
  width: 300px;
  padding: 10px;
  margin: 20px;
}
</style>