<template>

<Header/>

<h2>Course Details</h2>

<p>Course ID : {{ route.params.id }}</p>

<button @click="goProfile">

Enroll

</button>

</template>

<script setup>

import Header from '../components/Header.vue'

import { useRoute,useRouter } from 'vue-router'

const route=useRoute()

const router=useRouter()

function goProfile(){

router.push('/profile')

}

</script>