@ECHO OFF & REM turn off automatic printing to console.
SETLOCAL ENABLEEXTENSIONS & REM SET local scope--don't preserve overwritten global variables--and turn on processor extenions
REM the following are user defined "constants" but are mutable, increment by power of 2 for bitwise or multiple error numbers
REM WARNING: Do not put " & etc." after assignments or else it adds a space character to the assigned value.
SET /A ERROR_HELP_SCREEN=1
SET /A ERROR_FILE_NOT_FOUND=2
SET /A ERROR_FILE_READ_ONLY=4
SET /A ERROR_UNKNOWN=8
REM Get name of this script:
SET ME=%~n0
REM Get parent directory of this script:
SET PARENT=%~dp0
REM End boiler code

ECHO %ME%: Initializing mysqld and populating data directory...
SET "mysqlDir=D:\Program Files\mysql\mysql-5.7.21-winx64"
SET "defaultFilePath=%mysqlDir%\defaults\sdsu.cnf"
ECHO defaultFilePath = %defaultFilePath%
mysqld --defaults-file="%defaultFilePath%" --initialize
REM Might need to change defaults depending computer
REM mysqld should be added to system path

ECHO %ME%: Starting mysql service...
NET START mysql
REM Use "NET STOP mysql" to stop this service.
REM Might need to "mysqld --install" before doing above. May need to run cmd as administrator.

ECHO %ME%: Start login process...
ECHO %ME%: User = mysql
mysql -u root -p & REM password will be prompted, might be in the log file

REM You should now be in mysql CLI
REM You may need to reset your password:
REM mysql> SET PASSWORD = PASSWORD('your_new_password');
REM RIGHT THE PASSWORD DOWN IN THE DATA DIRECTORY OR SOMEWHERE EASY TO FIND