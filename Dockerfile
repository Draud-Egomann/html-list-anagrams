FROM nginx:latest

WORKDIR /usr/share/nginx/html

# Copy the contents of ./src to the container's work directory
COPY ./src /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]