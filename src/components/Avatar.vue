<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default:
        'https://instagram.fist6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87663544_597360667485122_4216702838564192256_n.jpg?_nc_ht=instagram.fist6-1.fna.fbcdn.net&_nc_ohc=9lutNZrkvCgAX-kqxmG&oh=cd5a94d050aa0459e6b55b2dc2a65302&oe=5F60BF90'
    },
    alt: {
      type: String
    },
    size: {
      type: Number
    }
  }
}
</script>

<style scoped>
.avatar {
  display: inline-flex;
  padding: 2px;
  border-radius: 999px;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );

  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
