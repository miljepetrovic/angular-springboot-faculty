drop table if exists fakultet cascade;
drop table if exists departman cascade;
drop table if exists student cascade;
drop table if exists status cascade;
drop sequence if exists fakultet_seq;
drop sequence if exists departman_seq;
drop sequence if exists status_seq;
drop sequence if exists student_seq;


create table fakultet(
	id int not null,
    naziv varchar(100) not null,
    sediste varchar(50) not null
);
create table departman(
	id int not null,
    naziv varchar(100) not null,
    oznaka varchar(10) not null,
    fakultet int not null
);
create table status(
	id int not null,
    naziv varchar(100) not null,
    oznaka varchar(10) not null
);
create table student(
	id int not null,
    ime varchar(50) not null,
    prezime varchar(50) not null,
    broj_indeksa varchar(20) not null,
    status int not null,
    departman int not null
);

-- primarni kljucevi

alter table fakultet add constraint PK_fakultet_id primary key (id);
alter table departman add constraint PK_departman_id primary key (id);
alter table status add constraint PK_status_id primary key (id);
alter table student add constraint PK_student_id primary key (id);

-- strani kljucevi

alter table departman add constraint FK_departman_fakultet foreign key (fakultet) references fakultet(id);
alter table student add constraint FK_student_status foreign key (status) references status(id);
alter table student add constraint FK_student_departman foreign key (departman) references departman(id);

-- indeksi

create index IDXFK_departman_fakultet on departman (fakultet);
create index IDXFK_student_status on student (status);
create index IDXFK_student_departman on student (departman);

-- sekvence

create sequence fakultet_seq increment 1;
create sequence student_seq increment 1;
create sequence departman_seq increment 1;
create sequence status_seq increment 1;
