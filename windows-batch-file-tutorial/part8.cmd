@ECHO OFF & REM turn off automatic printing to console.
SETLOCAL ENABLEEXTENSIONS & REM SET local scope--don't preserve overwritten global variables--and turn on processor extenions
REM the following are user defined "constants" but are mutable, increment by power of 2 for bitwise or multiple error numbers
SET /A ERROR_HELP_SCREEN=1
SET /A ERROR_FILE_NOT_FOUND=2
SET /A ERROR_FILE_READ_ONLY=4
SET /A ERROR_UNKNOWN=8
REM End boiler code

REM Start main program - Parsing Input

SET filepath=%~f1

IF NOT EXIST "%filepath%" (
	ECHO %~n0: file not found - %filepath% >&2
	REM EXIT /B 1
)

SET filepath=%dp0%\default.txt
REM the first parameter is an optional filepath
IF EXIST "%~f1" SET filepath=%~f1
ECHO %filepath%

REM confirm
SET /P "Continue [y/n]"> %confirm%
FINDSTR /I "^(y|n|yes|no)$" > NUL || GOTO: confirm