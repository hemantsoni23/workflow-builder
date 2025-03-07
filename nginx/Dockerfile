FROM nginx:latest

# Copy main nginx.conf to /etc/nginx/
COPY nginx.conf /etc/nginx/nginx.conf

COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

# Expose Port
EXPOSE 80
