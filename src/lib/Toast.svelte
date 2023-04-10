<script lang="ts" context="module">
  import {slide} from 'svelte/transition'
  import {msgs, addMsg, removeMsg, auto, closeable} from './store'


  function show(msg: string, opts?: Parameters<typeof addMsg>[1]) {
    return addMsg(msg, opts)
  }

  function hide(i: number) {
    removeMsg(i)
  }

  export const toast = {show, hide}
</script>

<script lang="ts">
  let style = ''
  let _closeable = false
  let _auto = true

  $: auto.set(_auto)
  $: closeable.set(_closeable)

  export {_auto as auto, _closeable as closeable, style}
</script>


<section class="root" style={style}>
  {#each $msgs as msg (msg.id)}
    {@const closeable = msg.closeable ?? $closeable}
    <div class="item" transition:slide|local
      style:justify-content={closeable ? 'space-between' : 'center'}>
      <div>{msg.content}</div>
      {#if closeable}
        <svg viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
          on:click={() => removeMsg(msg.id)}>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      {/if}
    </div>
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
    z-index: 9999;
  }

  .item {
    background-color: var(--background-color, #333333cf);
    color: var(--color, #fff);
    font-size: var(--font-size, .9rem);
    width: fit-content;
    padding: 0 1rem;
    min-width: 8rem;
    margin: 1rem auto 0;
    max-width: 40rem;
    border-radius: var(--border-radius, .2rem);
    height: 3rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    font-family: var(--font-family, sans-serif);

    svg {
      margin-left: 1rem;
      width: var(--icon-width, var(--icon-size, 22px));
      height: var(--icon-height, var(--icon-size, 22px));
      stroke: var(--icon-color, #fff);
      pointer-events: auto;
      cursor: pointer;
    }
  }
</style>
