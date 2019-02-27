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
CREATE PROCEDURE UserRegister(Name varchar(45),DoB Date,School varchar(45),Address varchar(45),Avatar varchar(9999),PhoneNumber varchar(45))
    BEGIN
        INSERT INTO User(FullName,DoB,School,Address,Avatar,PhoneNumber)
        VALUES (Name,DoB,School,Address,Avatar,PhoneNumber);
    END; $$
-- CREATE PROCEDURE UserRegister(Name varchar(45),DoB Date,School varchar(45),Address varchar(45),Email varchar(45),Avatar varchar(9999),PhoneNumber varchar(45))
--     BEGIN
--         INSERT INTO User(FullName,DoB,School,Address,Avatar,PhoneNumber,Email)
--         VALUES (Name,DoB,School,Address,Avatar,PhoneNumber,Email);
--     END; $$
delimiter ;