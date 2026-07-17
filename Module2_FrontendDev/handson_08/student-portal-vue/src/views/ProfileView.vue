<template>

<Header/>

<h2>Enrolled Courses</h2>

<div
v-for="course in store.enrolledCourses"
:key="course.code">

<p>{{ course.name }} ({{ course.credits }} Credits)</p>

</div>

<h3>Total Credits : {{ store.totalCredits }}</h3>

</template>

<script setup>

import Header from '../components/Header.vue'
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()

</script>