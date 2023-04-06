<script lang="ts">
  import {Toast, push} from '$lib'
</script>

<Toast/>
<button on:click={() => {
  push('ok')
}}>added</button>
