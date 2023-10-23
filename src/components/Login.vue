<script lang="ts" setup>
import { useAuth } from '@okta/okta-vue'
import { onBeforeMount } from 'vue'

const auth = useAuth()

onBeforeMount(() => {
  auth.signInWithRedirect({ originalUri: '/' })
})
</script>
