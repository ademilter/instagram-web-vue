<template>
  <div class="home">
    <div class="timeline">
      <h1>Home</h1>

      <br />
      <br />

      <Post />

      <br />
      <br />
      <br />
    </div>

    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eius
        vero. Alias aut blanditiis commodi consectetur eligendi, et minima
        officiis omnis optio pariatur quod quos repudiandae rerum sed tempora
        voluptatibus?
      </p>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post'
export default {
  name: 'Home',
  components: { Post }
}
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
