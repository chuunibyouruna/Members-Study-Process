delimiter :)
create procedure ShowUser()
begin
	select * from User join UserRecord on User.idUser = UserRecord.User_idUser;
end:)

delimiter $$
CREATE PROCEDURE GetTopPoint(NumberGet integer)
    BEGIN
	SELECT Avatar,FullName,Score FROM USER JOIN SCORE ON Score.User_idUser = User.idUser
    ORDER BY Score.score DESC LIMIT NumberGet ;
	END$$

delimiter ;
