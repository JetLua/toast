# Toast
A toast component implemented based on Svelte.

## Usage

### install
```bash
pnpm i @iro/toast
```

### svelte
```ts
import {Toast, toast} from '@iro/toast'

// +page.svelte
<button on:click={() => toast('Wow!!!')}>toast</button>

// +layout.svelte
<Toast/>
<Toast --color="white" --background-color="green" --icon-size="20px" auto={false}/>
<Toast --color="white" --background-color="green" --icon-size="20px" closeable={false} --icon-color="yellow"/>
```
