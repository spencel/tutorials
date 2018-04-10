@echo OFF & rem turn off automatic printing to console.
setlocal ENABLEEXTENSIONS & rem set local scope--don't preserve overwritten global variables--and turn on processor extenions
rem the following are user defined "constants" but are mutable, increment by power of 2 for bitwise or multiple error numbers
set /A ERROR_HELP_SCREEN=1
set /A ERROR_FILE_NOT_FOUND=2
set /A ERROR_FILE_READ_ONLY=4
set /A ERROR_UNKNOWN=8

set thisFileName=%~n0 & rem get this file's name
echo. & echo.thisFileName = %thisFileName%

set thisDirectoryPath=%~dp0 & rem get this file's directory's path
echo. & echo.thisDirectoryPath = %thisDirectoryPath%

rem If the return code is not 0, then an error has occured.
rem 'neq' means not equal to, or <>, or != 
if %errorlevel% neq 0 ( rem if errorlevel doesn't equal 0
	rem do something here to address the error
)

rem avoid using the following technique because return codes can be a negative value:
if errorlevel 1 ( rem if errolevel is greater than or equal to 1
	rem do something here to address the error
)

rem 'equ' means equal to, or ==
if %errorlevel% equ 9009 (
	echo error - %thisFileName% not found in your PATH
)

rem The && operator executes successive commands
SomeCommand.exe && ECHO SomeCommand.exe succeeded!
rem The following code after || executes after a failure
SomeCommand.exe || ECHO SomeCommand.exe failed with return code %ERRORLEVEL%
rem The 'exit /B' command halts a script, which is useful for errors.
SomeCommand.exe || EXIT /B 1 & rem 1 is an error return code
REM The "GOTO" command can be used to exit a file too.
SomeCommand.exe || GOTO :EOF & REM :EOF is a reserved word for end of file.

SomeCommand.exe
IF %ERRORLEVEL% NEQ 0 SET /A errno^|=%ERROR_SOMECOMMAND_NOT_FOUND%

OtherCommand.exe
IF %ERRORLEVEL% NEQ 0 (
    SET /A errno^|=%ERROR_OTHERCOMMAND_FAILED%
)