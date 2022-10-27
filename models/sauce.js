// const { Model, DataTypes } = require('sequelize');
// // const sequelize = require('../config/connection');

// class Sauce extends Model { }

// Sauce.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         description : {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate:{
//                 len: [1]
//             }
//         },
//         location: {
//             type: DataTypes.STRING,
//             allowNull:false
//         },
//         sco_score: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//     }
// )

// module.exports = Sauce;

document.getElementById("app").innerHTML = (
  <div>
    <button id="upload_widget" class="cloudinary-button">
      Upload Image
    </button>
  </div>
);

var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "dwjycofwm",
    uploadPreset: "hs_test",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);
