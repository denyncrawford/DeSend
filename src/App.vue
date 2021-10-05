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
    this.$router.beforeEach(async (to, from, next) => {
      if (to.meta.requiresAuth && !await getUser()) return next({ name: 'connect', query: { redirect: to.fullPath } })
      if (to.meta.requiresLogout && await getUser()) return next({ name: 'app' })
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