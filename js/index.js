/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
*/


function getlocation(){
    navigator.geolocation.getCurrentPosition(geolocationSuccess,
        [geolocationError],
        [geolocationOptions]);
}

//Cordova würde weitere Optionen erlauben -> deshalb Abfrage ob PWA oder Cordova
function bodyGeladen(){
    if (window.usingCordova){
        console.log("is a native App");
    }
    else {
        console.log("is a PWA App");
        initApp();
    }
}

function initApp(){
    console.log("starting Framework7 app..")
    var app= new Framework7({
        root: '#app',
        name: 'My App',
        id: 'com.myapp.test',
        panel: {
            swipe: 'left',
        } 
    });
}

//deviceready ist getriggert von Cordova -> deshalb hat Framework 7 auch gefehlt weil initApp nicht ausgeführt wurde
document.addEventListener('deviceready',initApp,false);
