#!/bin/bash

echo "Running db seed commands"

psql -d test_reregretsy_database -c "insert into products values ('1213d10e-b6b5-4d6d-af44-2b10d334ed52','Small Soft Ball','131.00','http://lorempixel.com/640/480/nature','Colleen Hand','Madaline_Greenholt','https://s3.amazonaws.com/uifaces/faces/twitter/bpartridge/128.jpg')"

psql -d test_reregretsy_database -c "insert into products values ('14914197-1762-4f6e-a424-5d5bebb7695c','Small Fresh Car','855.00','http://lorempixel.com/640/480/city','Rose Leannon','Kamryn_Hansen9','https://s3.amazonaws.com/uifaces/faces/twitter/hota_v/128.jpg');"

psql -d test_reregretsy_database -c "insert into products values ('06be9a5c-9ea2-4868-9ba2-53989f119d68','Licensed Concrete Tuna','85.00','http://lorempixel.com/640/480/technics','Vern Skiles','Antonetta_Champlin67','https://s3.amazonaws.com/uifaces/faces/twitter/matkins/128.jpg');"