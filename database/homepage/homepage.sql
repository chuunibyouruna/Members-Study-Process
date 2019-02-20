use mydb;

INSERT INTO User VALUES ('03', 'Nguyen 03', '1998-3-12','2018-10-12','nguyen01@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '01','avatar 3');
INSERT INTO User VALUES ('04', 'Nguyen 04', '1998-3-12','2018-10-12','nguyen02@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 4');
INSERT INTO User VALUES ('05', 'Nguyen 05', '1998-3-12','2018-10-12','nguyen03@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 5');
INSERT INTO User VALUES ('06', 'Nguyen 06', '1998-3-12','2018-10-12','nguyen04@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 6');
INSERT INTO User VALUES ('07', 'Nguyen 07', '1998-3-12','2018-10-12','nguyen05@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 7');
INSERT INTO User VALUES ('08', 'Nguyen 08', '1998-3-12','2018-10-12','nguyen06@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 8');
INSERT INTO User VALUES ('09', 'Nguyen 09', '1998-3-12','2018-10-12','nguyen07@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '03','avatar 9');
INSERT INTO User VALUES ('10', 'Nguyen 10', '1998-3-12','2018-10-12','nguyen08@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '03','avatar 10');
INSERT INTO User VALUES ('11', 'Nguyen 11', '1998-3-12','2018-10-12','nguyen09@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 11');
INSERT INTO User VALUES ('12', 'Nguyen 12', '1998-3-12','2018-10-12','nguyen10@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '01','avatar 12');
INSERT INTO User VALUES ('13', 'Nguyen 13', '1998-3-12','2018-10-12','nguyen11@gmail.com','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 13');


INSERT INTO TypeUser VALUES ('01','admin');
INSERT INTO TypeUser VALUES ('02','member');
INSERT INTO TypeUser VALUES ('03','manager');

INSERT INTO Score VALUES ('02',211);
INSERT INTO Score VALUES ('03',451);
INSERT INTO Score VALUES ('04',332);
INSERT INTO Score VALUES ('05',237);
INSERT INTO Score VALUES ('06',653);
INSERT INTO Score VALUES ('07',112);
INSERT INTO Score VALUES ('08',564);
INSERT INTO Score VALUES ('09',444);
INSERT INTO Score VALUES ('10',656);
INSERT INTO Score VALUES ('11',232);
INSERT INTO SCORE VALUES ('12',432);
INSERT INTO Score VALUES ('13',231);


delimiter $$
CREATE PROCEDURE GetTopPoint(NumberGet integer)
    BEGIN
	SELECT Avatar,FullName,Score FROM USER JOIN Score ON Score.User_idUser = User.idUser
    ORDER BY Score.score DESC LIMIT NumberGet ;
	END$$

delimiter ;
DROP PROCEDURE GetTopPoint;
call GetTopPoint(10);

select * from User;
select * from Score;
select * from TypeUser;