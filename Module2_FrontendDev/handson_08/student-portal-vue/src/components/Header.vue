<template>
<header>

<h2>Student Portal</h2>

<nav>
<RouterLink to="/">Home</RouterLink>
<RouterLink to="/courses">Courses</RouterLink>
<RouterLink to="/profile">
Profile ({{ store.enrolledCourses.length }})
</RouterLink>
</nav>

</header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()
</script>

<style scoped>
header{
  background:#1976d2;
  color:white;
  padding:15px;
  display:flex;
  justify-content:space-between;
}

a{
  color:white;
  margin-left:20px;
  text-decoration:none;
}
</style>