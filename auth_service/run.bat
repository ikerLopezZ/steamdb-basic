@ECHO OFF
call env\Scripts\activate
cd ..
py -m auth_service.run
