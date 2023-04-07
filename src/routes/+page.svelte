<script lang="ts">
  import {HighlightSvelte, LineNumbers} from 'svelte-highlight'
  import ts from 'svelte-highlight/languages/typescript'
  import 'svelte-highlight/styles/atom-one-dark.css'

  import {Toast, toast} from '$lib'
</script>

<script lang="ts" context="module">
  let i = 0

  const codes = [
`<script lang="ts">
  import {Toast, toast} from '@iro/toast'
<\/script>
<Toast closeable --color="white" --background-color="green" --icon-size="20px" auto={false} --icon-color="yellow"/>
<button on:click={() => toast.show('Wow!!!')}>toast</button>`
  ]
</script>

<Toast closeable --color="white" --background-color="green" --icon-size="20px" auto={false} --icon-color="yellow"/>


{#each codes as code}
  <HighlightSvelte {code} let:highlighted>
    <LineNumbers {highlighted} wrapLines/>
  </HighlightSvelte>
  <button on:click={() => {
    toast.show('Wow!!!')
  }}>toast</button>
{/each}
