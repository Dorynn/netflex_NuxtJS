<template>
<vueper-slides style="height: 100vh">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :title="slide.title"
    :content="slide.content">
  </vueper-slide>
</vueper-slides>
</template>

<script>
export default {
  
data() {
  return{
    
    slides: [
      {
        title: 'Slide #1',
        content: 'Slide 1 content.'
      },
      {
        title: 'Slide #2',
        content: 'Slide 2 content.'
      }
    ]
  }
}
}
</script>

<style>

</style>