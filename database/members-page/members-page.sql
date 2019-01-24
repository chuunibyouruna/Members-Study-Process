use mydb;

insert into TypeUser value ('ad0001', 'Admin');
insert into TypeUser value ('user01', 'User');
insert into User value ('user01', 'Pham Hoang Hao', '1998-03-12', 'DHCT', 'Can Tho', 'ad0001');
insert into User value ('user02', 'Pham Hao', '1998-03-12', 'DHCT', 'Can Tho', 'user01');
insert into User value ('user03', 'Pham Hoang', '1998-03-12', 'DHCT', 'Can Tho', 'user01');
insert into User value ('user04', 'Pham H Hao', '1998-03-12', 'DHCT', 'Can Tho', 'ad0001');
insert into User value ('user05', 'Pham Hoan Hao', '1998-03-12', 'DHCT', 'Can Tho', 'ad0001');
insert into User value ('user06', 'Pham Hang Hao', '1998-03-12', 'DHCT', 'Can Tho', 'ad0001');
insert into User value ('user07', 'Pham Hong Hao', '1998-03-12', 'DHCT', 'Can Tho', 'user01');
insert into User value ('user08', 'Pham Hoangg Hao', '1998-03-12', 'DHCT', 'Can Tho', 'ad0001');

insert into Course value( 'course01', 'JavaScript', 40);
insert into UserRecord value('course01', 'user01', 40, 90.5);
insert into UserRecord value('course01', 'user02', 40, 91.5);
insert into UserRecord value('course01', 'user03', 40, 92.5);
insert into UserRecord value('course01', 'user04', 40, 94.5);
insert into UserRecord value('course01', 'user05', 40, 95.5);
insert into UserRecord value('course01', 'user06', 40, 96.5);
insert into UserRecord value('course01', 'user07', 40, 97.5);
insert into UserRecord value('course01', 'user08', 40, 97.5);

delimiter :)
create procedure ShowUser()
begin
	select * from User join UserRecord on User.idUser = UserRecord.User_idUser;
end:)