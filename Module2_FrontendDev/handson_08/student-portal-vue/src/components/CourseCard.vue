<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p><strong>Code:</strong> {{ code }}</p>
    <p><strong>Credits:</strong> {{ credits }}</p>
    <p><strong>Grade:</strong> {{ grade }}</p>

    <button @click="$emit('enroll')">Enroll</button>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  code: String,
  credits: Number,
  grade: String
})

defineEmits(['enroll'])
</script>

<style scoped>
.card{
  border:1px solid #ccc;
  border-radius:8px;
  padding:15px;
  margin:10px 0;
}

button{
  margin-top:10px;
  padding:8px 14px;
}
</style>