<script lang="ts" context="module">
  import {slide} from 'svelte/transition'
  import {msgs, addMsg} from './store'

  export function push(msg: string) {
    addMsg(msg)
  }
</script>


<section class="root">
  {#each $msgs as msg (msg.id)}
    <div class="item" transition:slide|local>{msg.content}</div>
  {/each}
</section>

<style lang="scss">
  .root {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    pointer-events: none;
  }

  .item {
    background-color: #333333d7;
    color: #fff;
    width: fit-content;
    padding: 0 1rem;
    min-width: 8rem;
    margin: 1rem auto 0;
    max-width: 40rem;
    border-radius: .2rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
</style>
