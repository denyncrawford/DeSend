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
import { IPFS, ipfsConfig as config, Database } from './services/storage.service.js'
import { mapMutations, mapState } from 'vuex'
export default {
  methods: {
    ...mapMutations(['setUser', 'setIpfsNode'])
  },
  computed: {
    ...mapState(['ipfsNode'])
  },
  async mounted() {
    const initialUser = await getUser()
    this.setUser(initialUser)
    console.log(await Database.listDatabases());
    if (initialUser && !this.ipfsNode) { 
      this.setIpfsNode(await IPFS.create({ repo: initialUser.id, config }));
      const aviondb = await Database.init("DeSend", this.ipfsNode);
      await AvionDB.listDatabases();
    }
    this.$router.beforeEach(async (to, from, next) => {
      const user = await getUser()
      if (to.meta.requiresAuth && !user) return next({ name: 'connect', query: { redirect: to.fullPath } })
      if (to.meta.requiresLogout && user) return next({ name: 'app' })
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