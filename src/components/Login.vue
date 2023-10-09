<script lang="ts">
import {oktaSignIn} from '../okta'
import {oktaAuth} from '../okta'

export default {
  name: 'Login',
  mounted: function () {
    this.$nextTick(function () {
      oktaAuth.signInWithRedirect({ originalUri: '/' })
    })
  },
  unmounted () {
    // Remove the widget from the DOM on path change
    oktaSignIn.remove()
  }
}
</script>