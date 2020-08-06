<template>
  <div class="home">
    <CustomText tag="h1">Profile</CustomText>
    <CustomText tag="p"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
      asperiores commodi consequuntur distinctio dolor doloremque eaque facere
      inventore iste itaque laudantium nostrum repellat, sed tempore voluptatem?
      Aperiam assumenda fuga magnam!</CustomText
    >

    <div id="nav">
      <router-link to="/profile">Post</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/save">Save</router-link> |
      <router-link to="/profile/tag">Tag</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Profile',
  components: {
    CustomText
  }
}
</script>

<style scoped></style>
