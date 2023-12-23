# TS Error handling, the go way

This is mostly a small convenience for myself. I wanted to see what it's like to publish an npm package, if you want to use it, write it yourself, it's probably gonna be better.

Code Example:

```typescript
import { handleException } from 'ts-go-exceptions';

const theBigAsync = async () => {...};

const [result, error] = await handleException<ResultType, ErrorType>(theBigAsync());

if (error !== null) {
  // handle error
};

// You're free to use result!
```
