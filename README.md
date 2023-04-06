# Toast
A toast component implemented based on Svelte.

## Usage

```ts
import {Toast, push} from '@iro/toast'

// +page.svelte
<button on:click={() => push('Wow!!!')}>toast</button>

// +layout.svelte
<Toast/>
```
