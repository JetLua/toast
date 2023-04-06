# Toast
A toast component implemented based on Svelte.

## Usage

### install
```bash
pnpm i @iro/toast
```

### svelte
```ts
import {Toast, push} from '@iro/toast'

// +page.svelte
<button on:click={() => push('Wow!!!')}>toast</button>

// +layout.svelte
<Toast/>
```
