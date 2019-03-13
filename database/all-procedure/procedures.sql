/*PROCEDURE*/
-- --DROP PROCEDURE GetTopPoint
DROP procedure ShowUser;
delimiter :)
create procedure ShowUser()
begin
	select * from User join UserRecord on User.idUser = UserRecord.User_idUser order by User.idUser asc;
end:)
delimiter $$

CREATE PROCEDURE GetTopPoint(NumberGet integer)
    BEGIN
	SELECT Avatar,FullName,Score FROM User JOIN Score ON Score.User_idUser = User.idUser
    ORDER BY Score.score DESC LIMIT NumberGet ;
	END$$

delimiter ;
call ShowUser;
delimiter $$
CREATE PROCEDURE getUserProfile(id varchar(45))
    BEGIN
        SELECT * FROM User WHERE idUser = id;
    END; $$
delimiter ;

delimiter $$
CREATE PROCEDURE updateUser(name varchar(45),birthday DATE,school varchar(45),address varchar(45),id CHAR(6))
    BEGIN
        UPDATE User SET FullName = name, DoB = birthday, School = school, Address = address WHERE idUser = id ;
    END; $$
delimiter ;


delimiter $$
CREATE PROCEDURE UserRegister(idUsr char(6),fullName varchar(45))
    BEGIN
        INSERT INTO User(idUser,FullName,TypeUser_idTypeUser)
        VALUES (idUsr,fullName,'03');
    END; $$
delimiter ;

delimiter $$
CREATE PROCEDURE AccountRegister(idUser varchar(6), usrName varchar(45), password varchar(100))
    BEGIN
      INSERT INTO Account (User_idUser,UserName,Password)
      VALUES (idUser,usrName,password);
    END; $$

delimiter ;

delimiter $$
CREATE PROCEDURE getState(idUser varchar(6), idLession varchar(10))
    BEGIN
      SELECT * FROM CodeDetail WHERE UserRecord_User_idUser = idUser AND UserRecord_Course_idCourse = idLession;
    END; $$

  delimiter ;


delimiter $$
CREATE PROCEDURE postLink(idUser varchar(6), idLession varchar(10), link varchar(9999))
    BEGIN
      UPDATE CodeDetail SET LinkContent = link WHERE UserRecord_User_idUser = idUser AND UserRecord_Course_idCourse = idLession;
    END; $$
  delimiter ;

delimiter $$
CREATE PROCEDURE checkUser(usrName varchar(45))
	BEGIN
		SELECT * FROM Account WHERE UserName like usrName;
    END; $$
delimiter ;
  
delimiter $$
CREATE PROCEDURE createToken(usrName varchar(45),token varchar(45))
	BEGIN
		UPDATE Account Set ResetToken = token,TokenExpire = NOW() WHERE Account.UserName = usrName;
    END; $$
delimiter ;

delimiter $$
CREATE PROCEDURE resetPassword(token varchar(45),newPassword varchar(45))
	BEGIN
		UPDATE Account SET PassWord = newPassword WHERE TIMEDIFF(NOW(),TOKENEXPIRE) < '00:15:00' AND ResetToken LIKE token;
    END; $$
delimiter ;


delimiter $$
CREATE PROCEDURE clearToken(token varchar(45))
	BEGIN
		UPDATE ACCOUNT SET ResetToken = null,TokenExpire = null WHERE ResetToken LIKE token;
    END; $$
delimiter ;

