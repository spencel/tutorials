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

ECHO %ME%: Initializing mysqld...
SET defaultsDir=defaults\default.cnf
SET defaultPath=%PARENT%%defaultsDir%
ECHO defaultPath = %defaultPath%
mysqld --defaults-file=%defaultPath%
REM Might need to change defaults depending computer

ECHO %ME%: Starting mysql service...
NET START mysql
REM Use "NET STOP mysql" to stop this service.
REM Might need to "mysqld -install" before doing above.

ECHO %ME%: Start login process...
mysql -u root -p & REM password will be prompted, might be in the log file