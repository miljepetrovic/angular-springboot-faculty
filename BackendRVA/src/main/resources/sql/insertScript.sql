-- insert skripta

-- fakultet
insert into "fakultet"("id", "naziv", "sediste") values (nextval('fakultet_seq'),'Fakultet tehnickih nauka','Novi Sad');
insert into "fakultet"("id", "naziv", "sediste") values (nextval('fakultet_seq'),'Fakultet organizacionih nauka','Beograd');
insert into "fakultet"("id", "naziv", "sediste") values (nextval('fakultet_seq'),'Prirodno-matematicki fakultet','Novi Sad');
insert into "fakultet"("id", "naziv", "sediste") values (nextval('fakultet_seq'),'Elektrotehnicki fakultet','Beograd');
insert into "fakultet"("id", "naziv", "sediste") values (nextval('fakultet_seq'),'Ekonomski fakultet','Subotica');
insert into "fakultet"("id", "naziv", "sediste") values (-100,'TEST','TEST');

-- status 
insert into "status"("id", "naziv", "oznaka") values (nextval('status_seq'), 'Budzet', 'B');
insert into "status"("id", "naziv", "oznaka") values (nextval('status_seq'), 'Samofinansiranje', 'SF');
insert into "status"("id", "naziv", "oznaka") values (nextval('status_seq'), 'Na daljinu', 'D');
insert into "status"("id", "naziv", "oznaka") values (nextval('status_seq'), 'Gostujuci student', 'G');
insert into "status"("id", "naziv", "oznaka") values (-100, 'TEST', 'T');


-- departman
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za industrijsko inzenjerstvo i menadzment', 'IIM', 1);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za energetiku, elektroniku i telekomunikacije', 'DEET', 1);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za racunarstvo i automatiku', 'CCD', 1);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za proizvodno masinstvo', 'PM', 1);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za menadzment', 'DM', 2);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za informacione sisteme i tehnolgije', 'DIT', 2);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za biologiju i ekologiju', 'DBE', 3);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za matematiku i informatiku', 'DMI', 3);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za fiziku', 'DF', 3);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za geografiju, turizam i hotelijerstvo', 'DGT', 3);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za primjenjenu matematiku', 'DPM', 4);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za signale i sisteme', 'DSS', 4);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za racunarsku tehniku i informatiku', 'DRTI', 4);                                
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za trgovinu, marketing i logistiku', 'DTML', 5);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (nextval('departman_seq'), 'Departman za poslovnu informatiku i kvantitativne metode', 'DPIKM', 5);
insert into "departman"("id", "naziv", "oznaka", "fakultet") values (-100, 'TEST', 'TEST', -100);
                                                                   
-- student
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Milan', 'Petrovic', 'IT51/2016', 1, 1);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Marko', 'Markovic', 'IM54/2017', 2, 1);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Stefan', 'Lukic', 'II512/2013', 2, 1);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Djordje', 'Stjepanovic', 'EE41/2016', 1, 2);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Ana', 'Ivanovic', 'RA51/2016', 1, 3);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Vlado', 'Georgiev', '1451/12', 3, 5);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Nebojsa', 'Micic', '4251/2015', 2, 9);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Milan', 'Petrovic', 'IT51/2016', 1, 7);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Lucas', 'Spanulis', 'GD2454', 4, 3);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (nextval('student_seq'), 'Milos', 'Ilic', 'IT51/2016', 1, 6);
insert into "student"("id", "ime", "prezime", "broj_indeksa", "status", "departman") values (-100, 'TEST', 'TEST', 'TEST', -100, -100);