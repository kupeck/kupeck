@echo off
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Copyright start.bat                     I
echo I   kupeck#9974 2020                        I
echo I   Some rights reserved                    I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
goto :firsttime

:firsttime
cls
echo +-------------------------------------------+
echo I                                           I
echo I   First time?                             I
echo I   1 = New setup                           I
echo I   2 = Load from previous                  I
echo I                                           I
echo +-------------------------------------------+
set /P _firsttime= Please enter an input: 
if "%_firsttime%"=="1" goto :setup
if "%_firsttime%"=="2" goto :load
goto :firsttime

:load
set /P _jarname=<startbat/jarname.txt
set /P _Xmx=<startbat/xmxint.txt
set /P _Xms=<startbat/xmsint.txt
goto :start

:setup
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Here write name of your .jar file       I
echo I   (without .jar)                          I
echo I   and than press return/enter             I
echo I                                           I
echo +-------------------------------------------+
set /P _jarname= Please enter an input: 
cls
echo +-------------------------------------------+
echo I                                           I
echo I   How much max ram MB allocated?          I
echo I   (without M)                             I
echo I   and than press return/enter             I
echo I                                           I
echo +-------------------------------------------+
set /P _Xmx= Please enter an input: 
cls
echo +-------------------------------------------+
echo I                                           I
echo I   How much min ram MB allocated?          I
echo I   (without M)                             I
echo I   and than press return/enter             I
echo I                                           I
echo +-------------------------------------------+
set /P _Xms= Please enter an input: 
if exist "startbat" goto :save
mkdir "startbat"
:save 
echo %_jarname%> startbat/jarname.txt
echo %_Xmx%> startbat/xmxint.txt
echo %_Xms%> startbat/xmsint.txt
goto :start

:start
cls
echo +-------------------------------------------+
java -Xmx"%_Xmx%"M -Xms"%_Xms%"M -jar "%_jarname%".jar -nogui
echo +-------------------------------------------+
timeout /T 120
:vyber
cls
echo +-------------------------------------------+
echo I                                           I
echo I   1 = Close window                        I
echo I   2 = Start the server again (5 = fast)   I
echo I   3 = New setup                           I
echo I                                           I
echo +-------------------------------------------+
set /P _vybernumber= Please enter an input: 
if "%_vybernumber%"=="1" goto :konec
if "%_vybernumber%"=="2" goto :restart
if "%_vybernumber%"=="3" goto :setup
if "%_vybernumber%"=="5" goto :restartshort
goto :vyber

:konec
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Safely ended!                           I
echo I   You can now safely turn off             I
echo I   your computer                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 20
exit

:restart
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 20 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 19 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 18 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 17 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 16 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 15 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 14 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 13 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 12 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 11 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 10 seconds                           I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 9 seconds                            I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 8 seconds                            I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 7 seconds                            I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 6 seconds                            I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 5 seconds                            I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 4 seconds                            I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
:restartshort
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 3 seconds                            I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 2 seconds                            I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
cls
echo +-------------------------------------------+
echo I                                           I
echo I   Server will start soon!                 I
echo I   In 1 second                             I
echo I                                           I
echo I                                           I
echo +-------------------------------------------+
timeout /T 1
goto :start