<template>
  <div class="w-screen h-screen overflow-hidden relative bg-gray-800">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { getUser } from './services/localstorage.service.js';
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['setUser'])
  },
  async mounted() {
    this.setUser(await getUser())
    this.$router.beforeEach((to, from, next) => {
      document.title = to.meta.title
      next()
    })
  }
}
</script>

<style scoped>
.fade-enter-active {
  animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: .8s; /* don't forget to set a duration! */
}
.fade-leave-active {
  animation: fadeOutRight;
  animation-duration: .8s;
}

*::-webkit-scrollbar {
  display: none;
}

</style>