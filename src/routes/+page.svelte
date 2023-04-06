<script lang="ts">
  import {Toast, show} from '$lib'

</script>

<script lang="ts" context="module">
  let i = 0
</script>

<Toast closeable --color="white" --background-color="green" --icon-size="20px" auto={false} --icon-color="yellow"/>

<button on:click={() => {
  i++
  if (i % 2) show('ok')
  else show('ok', {closeable: false})
}}>Touch Me</button>
