create database reactDatabase;

use reactDatabase;

create table users (
    idU int not null auto_increment,
    nameU varchar(255) not null,
    emailU varchar(255) not null,
    passwordU varchar(255) not null,
    primary key (idU)
);

insert into users (nameU, emailU, passwordU) values 
('John Doe', 'john', '1234'),
('Jane Doe', 'jane', '1234'),
('Bob Doe', 'bob', '1234'),
('Alice Doe', 'alice', '1234');