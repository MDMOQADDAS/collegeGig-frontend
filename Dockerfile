FROM alpine AS build  
#Build Stage

WORKDIR /app

COPY package*.json ./

RUN apk update && \
	apk add nodejs npm && \
	npm i


COPY . .

RUN npm run build

#Stage2
FROM alpine
RUN apk add nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/http.d/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
