//best selling author component//
<template >
  ||best selling Publishers| ||best selling authors||
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="toggleSlideshow">Toggle Slideshow</button>
  </div>
</template>
