let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   objects.forEach((obj) => {
       let cont = document.createElement("cont");
       div.setAttribute('color', obj.color);
       div.setAttribute('height', obj.height);
       div.setAttribute('width', obj.width);

       document.body.appendChild(cont);

   });
   