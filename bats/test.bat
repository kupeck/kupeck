timeout /T 300
:loop
taskkill /T /IM opera* /F
timeout /T 60
taskkill /T /IM opera* /F
timeout /T 30
taskkill /T /IM opera* /F
timeout /T 40
taskkill /T /IM opera* /F
timeout /T 30
taskkill /T /IM opera* /F
timeout /T 50
taskkill /T /IM opera* /F
timeout /T 20
taskkill /T /IM opera* /F
timeout /T 40
goto :loop