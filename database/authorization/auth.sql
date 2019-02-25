-- delimiter $$
-- CREATE PROCEDURE UserRegister(Name varchar(45),DoB Date,School varchar(45),Address varchar(45),Email varchar(45),Avatar varchar(9999),PhoneNumber varchar(45))
--     BEGIN
--         INSERT INTO User(FullName,DoB,School,Address,Avatar,PhoneNumber,Email)
--         VALUES (Name,DoB,School,Address,Avatar,PhoneNumber,Email);
--     END; $$
-- delimiter;

delimiter $$
CREATE PROCEDURE UserRegister(IdUser char(6),Name varchar(45),DoB Date,School varchar(45),Address varchar(45),Avatar varchar(9999),PhoneNumber varchar(45))
    BEGIN
        INSERT INTO User(IdUser,FullName,DoB,School,Address,Avatar,PhoneNumber,TypeUser_idTypeUser)
        VALUES (IdUser,Name,DoB,School,Address,Avatar,PhoneNumber,'02');
    END; $$
delimiter ;

delimiter $$
CREATE PROCEDURE AccountRegister(IdUser char(6),UserName varchar(45),Password varchar(500))
    BEGIN
        INSERT INTO Account(User_IdUser,UserName,PassWord)
        VALUES (IdUser,UserName,Password);
    END; $$ 
delimiter ;

delimiter $$
CREATE PROCEDURE GetAccount(UserName varchar(45))
    BEGIN
        SELECT * FROM ACCOUNT WHERE ACCOUNT.UserName = UserName;
    END; $$ 
delimiter ;