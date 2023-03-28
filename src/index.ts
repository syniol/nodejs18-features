import { Greet } from './greet';

async function main(): Promise<any> {
    Greet()
}

(async () => await main())()
