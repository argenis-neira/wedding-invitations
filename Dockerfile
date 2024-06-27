# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia los archivos construidos en el directorio de Nginx
COPY ./build /usr/share/nginx/html

# Exponer el puerto en el que Nginx está corriendo
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
