create database ujianbackend;

use ujianbackend;

create table movies (
id int auto_increment primary key,
nama varchar(50) not null,
tahun int(7) not null,
deskripsi varchar(100) not null
);

create table categories (
id int auto_increment primary key,
nama varchar(50) not null
);


create table movcat (
id int auto_increment primary key,
movie_id int not null,
category_id int not null,
	constraint FK_MovieId
	foreign key (movie_id) references movies(id)
	on update cascade on delete cascade,
	constraint FKK_CategoryId
	foreign key (category_id) references categories(id)
	on update cascade on delete cascade
	);
    
select * from movies;

select * from categories;

select * from movcat;


