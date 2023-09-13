FROM node:18 as build-stage

WORKDIR /build
COPY . .
RUN yarn global add @quasar/cli
RUN yarn
RUN quasar build

FROM caddy:2.5.2

COPY --from=build-stage /build/dist/spa /srv
COPY services/Console/Caddyfile /etc/caddy/Caddyfile