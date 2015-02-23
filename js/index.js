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
var pos;
var watchId = null;
var map;
var currentRoute;
var currentPosition;
var isRouting = false;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        this.bindButtons();
        document.addEventListener('deviceready', this.onDeviceReady, false);        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var options = {timeout : 10000};
        watchId = navigator.geolocation.watchPosition(app.onLocationChangeSuccess, onLocationChangeError, options);
    },
    onLocationChangeSuccess: function(position)
    {
        alert('location change called');
        viewOptions = new Microsoft.Maps.ViewOptions(
            {
                animate : true,
                center : new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude),
                zoom :15
            });

        if(map!=null)
        {
            map.setView(viewOptions);
        }
    },
    onLocationChangeError: function (error)
    {
          alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
    },
    // Update DOM on a Received Event
    bindButtons: function() {
        var pages = document.querySelector('core-animated-pages');
        var mapButton = document.getElementById('mapButton');
        var routeButton = document.getElementById('routeDetailButton');
        mapButton.addEventListener('click', function()
        {
            pages.selected = 0;
        });
        routeButton.addEventListener('click', function()
        {
            pages.selected = 1;
        });
    }
};
