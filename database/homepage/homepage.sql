use mydb;

INSERT INTO USER VALUES ('03', 'Nguyen 03', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '01','avatar 3');
INSERT INTO USER VALUES ('04', 'Nguyen 04', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 4');
INSERT INTO USER VALUES ('05', 'Nguyen 05', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '01','avatar 5');
INSERT INTO USER VALUES ('06', 'Nguyen 06', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 6');
INSERT INTO USER VALUES ('07', 'Nguyen 07', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 7');
INSERT INTO USER VALUES ('08', 'Nguyen 08', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 8');
INSERT INTO USER VALUES ('09', 'Nguyen 09', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '03','avatar 9');
INSERT INTO USER VALUES ('10', 'Nguyen 10', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '03','avatar 10');
INSERT INTO USER VALUES ('11', 'Nguyen 11', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 11');
INSERT INTO USER VALUES ('12', 'Nguyen 12', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '01','avatar 12');
INSERT INTO USER VALUES ('13', 'Nguyen 13', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '02','avatar 13');

INSERT INTO TYPEUSER VALUES ('02','member');
INSERT INTO TYPEUSER VALUES ('03','manager');

INSERT INTO SCORE VALUES ('02',211);
INSERT INTO SCORE VALUES ('03',451);
INSERT INTO SCORE VALUES ('04',332);
INSERT INTO SCORE VALUES ('05',237);
INSERT INTO SCORE VALUES ('06',653);
INSERT INTO SCORE VALUES ('07',112);
INSERT INTO SCORE VALUES ('08',564);
INSERT INTO SCORE VALUES ('09',444);
INSERT INTO SCORE VALUES ('10',656);
INSERT INTO SCORE VALUES ('11',232);
INSERT INTO SCORE VALUES ('12',432);
INSERT INTO SCORE VALUES ('13',231);


delimiter $$
CREATE PROCEDURE GetTopPoint(NumberGet integer)
    BEGIN
	SELECT Avatar,FullName,Score FROM USER JOIN SCORE ON Score.User_idUser = User.idUser
    ORDER BY Score.score DESC LIMIT NumberGet ;
	END$$

delimiter ;
DROP PROCEDURE GetTopPoint;
call GetTopPoint(10);

select * from user;
select * from score;
select * from typeuser;