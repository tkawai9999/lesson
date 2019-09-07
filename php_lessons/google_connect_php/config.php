<?php
/*
create database dotinstall_google_connect_php;
grant all on dotinstall_google_connect_php.* to dbuser@localhost identified by '********';

use dotinstall_google_connect_php

create table users (
    id int not null auto_increment primary key,
    google_user_id varchar(30) unique,
    google_email varchar(255),
    google_name varchar(255),
    google_picture varchar(255),
    google_access_token varchar(255),
    created datetime,
    modified datetime
);
*/


define('DSN', 'mysql:host=mysql1.php.xdomain.ne.jp;dbname=tkstudy_googleapitest');
define('DB_USER', 'tkstudy_test1');
define('DB_PASSWORD', 'c2061837');
define('CLIENT_ID', '673488656037-buug1oc1r64u2lotvroiks5mpg68nttb.apps.googleusercontent.com');
define('CLIENT_SECRET', 'QssrvEKrHrLvOXoqoCDfpoaW');
define('SITE_URL', 'http://tkstudy.php.xdomain.jp/google_connect_php/');

error_reporting(E_ALL & ~E_NOTICE);
session_set_cookie_params(0, '/google_connect_php/');
