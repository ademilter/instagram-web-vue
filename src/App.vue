<template>
  <div class="app">
    <MasterHeader />
    <router-view />
  </div>
</template>

<script>
import MasterHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    MasterHeader
  }
}
</script>
