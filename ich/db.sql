CREATE TABLE usuarios(
   id SERIAL PRIMARY KEY,
   nombre varchar(50),
   apellido varchar(50),
   correo varchar(20),
   contrasena varchar(20),
   estado integer,
   roles varchar(20)
);



CREATE TABLE libros(
   id SERIAL PRIMARY KEY,
   title varchar(40),
   author varchar(40),
   content varchar(500),
   content_short varchar(500),
   publisher varchar(200),
   publisher_date varchar(5),
   pages  varchar(5),
   language varchar(10),
   url_details varchar(200),
   url_download varchar(200),
   cover varchar(300),
   thumbnail varchar(300),
   num_comments varchar(3),
   fecha  timestamp NULL,
   id_usuarios SERIAL NOT NULL,
   CONSTRAINT fk_usuarios FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
);

