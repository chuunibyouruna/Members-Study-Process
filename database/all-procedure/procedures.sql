-- --DROP PROCEDURE GetTopPoint
DROP procedure getUserProfile;
delimiter :
create procedure ShowUser()
begin
	select * from User join UserRecord on User.idUser = UserRecord.User_idUser;
end:)
delimiter $$
CREATE PROCEDURE GetTopPoint(NumberGet integer)
    BEGIN
	SELECT Avatar,FullName,Score FROM User JOIN Score ON Score.User_idUser = User.idUser
    ORDER BY Score.score DESC LIMIT NumberGet ;
	END$$

delimiter ;

delimiter $$
CREATE PROCEDURE getUserProfile(id varchar(45))
    BEGIN
        SELECT * FROM User WHERE idUser = id;
    END; $$
delimiter ;
delimiter $$
CREATE PROCEDURE updateUser(name varchar(),birthday varchar(),school varchar(),address varchar(),id varchar(45))
    BEGIN
        UPDATE User SET FullName = name, DoB = birthday, School = school, Address = address WHERE idUser = id ;
    END; $$
delimiter ;
CALL getUserProfile('06')
Call updateUser('Nguyen 03', '1998-3-12','Dai Hoc Can Tho', 'Soc Trang', '03');
