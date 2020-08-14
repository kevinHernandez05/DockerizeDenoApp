import { serve } from "https://deno.land/std/http/server.ts"

const port:number = 42069;
const server = serve({ port: port});

const url:string = "http://localhost:" + port; 

console.log('Server running on: ' + url );

for await(const req of server){
    req.respond({ body: "Hi, guys from #DenoDominicana, this is a Hello World server example."});
}