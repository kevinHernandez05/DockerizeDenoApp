FROM hayd/alpine-deno:1.2.2

EXPOSE 42069

WORKDIR /app

USER deno

COPY . .
RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]