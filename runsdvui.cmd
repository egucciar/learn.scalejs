cd /d "C:\git\learn.scalejs" &msbuild "learn.scalejs.csproj" /t:sdvViewer /p:configuration="Debug" /p:platform=Any CPU
exit %errorlevel% 