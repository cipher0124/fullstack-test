// import controllers review, products
const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController')


// router
const router = require('express').Router()


// use routers
router.post('/addProduct', productController.upload , productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)



// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)




// Products router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router




// const bcrypt = require('bcryptjs');
 
// const password = 'pass123';
// const hashedPassword;
 
// // Encryption of the string password
// bcrypt.genSalt(10, function (err, Salt) {
 
//     // The bcrypt is used for encrypting password.
//     bcrypt.hash(password, Salt, function (err, hash) {
 
//         if (err) {
//             return console.log('Cannot encrypt');
//         }
 
//         hashedPassword = hash;
//         console.log(hash);
 
//         bcrypt.compare(password, hashedPassword,
//             async function (err, isMatch) {
 
//                 // Comparing the original password to
//                 // encrypted password
//                 if (isMatch) {
//                     console.log('Encrypted password is: ', password);
//                     console.log('Decrypted password is: ', hashedPassword);
//                 }
 
//                 if (!isMatch) {
 
//                     // If password doesn't match the following
//                     // message will be sent
//                     console.log(hashedPassword + ' is not encryption of '
//                         + password);
//                 }
//             })
//     })
// })





// CREATE DEFINER=`cipher`@`localhost` PROCEDURE `spProspectLocationReport`(IN pData json)
// BEGIN
//   DECLARE vProspectID text;


//   DECLARE vValueLen bigint UNSIGNED DEFAULT JSON_LENGTH(JSON_UNQUOTE(JSON_EXTRACT(pData, '$.value'))
//   );
//   DECLARE vindex bigint UNSIGNED DEFAULT 0;
//   DROP TEMPORARY TABLE IF EXISTS TempReportData;
//   CREATE TEMPORARY TABLE TempReportData (
//     ProspectName text,
//     Easting text,
//     Northing text,
//     Collar text,
//     HoleTypeID text
//   );
//   WHILE vindex < vValueLen DO
//     SET vProspectID = EXTRACT_JSON_ARRAY(pData, 'value', vindex, 'ProspectLocationID');

//     INSERT INTO TempReportData (ProspectName,
//     Easting,
//     Northing,
//     Collar,
//     HoleTypeID)
//       SELECT
//         pl.ProspectName,
//         pl.Easting,
//         pl.Northing,
//         pl.Collar,
//         (SELECT
//             t.TypeDesc
//           FROM Type t
//           WHERE t.TypeID = pl.HoleTypeID) AS HoleTypeID
//       FROM ProspectLocation pl
//       WHERE pl.ProspectLocationID = vProspectID;

//     SET vindex := vindex + 1;
//   -- SET vindex := vindex + 1;

//   END WHILE;
//   SELECT
//     *
//   FROM TempReportData;
// END



// FUNCTION `EXTRACT_JSON`(pData json, pValue text) RETURNS longtext CHARSET utf8mb4
// BEGIN
//   DECLARE vReturnVal text;
//   SET vReturnVal = IF(JSON_UNQUOTE(JSON_EXTRACT(pData, CONCAT('$.', pValue))) <> '', JSON_UNQUOTE(JSON_EXTRACT(pData, CONCAT('$.', pValue))), NULL);
//   RETURN vReturnVal;
// END

// FUNCTION `EXTRACT_JSON_ARRAY`(pData json, pJsonArray text, pIndex int, pValue text) RETURNS longtext CHARSET utf8mb4
// BEGIN
//   DECLARE vReturnVal text;
//   IF pValue <> '' THEN
//     SET vReturnVal = IF(JSON_UNQUOTE(JSON_EXTRACT(JSON_UNQUOTE(JSON_EXTRACT(pData, CONCAT('$.', pJsonArray))), CONCAT('$[', pIndex, '].', pValue))) <> '', JSON_UNQUOTE(JSON_EXTRACT(JSON_UNQUOTE(JSON_EXTRACT(pData, CONCAT('$.', pJsonArray))), CONCAT('$[', pIndex, '].', pValue))), NULL);
//   ELSE
//     SET vReturnVal = IF(JSON_UNQUOTE(JSON_EXTRACT(JSON_UNQUOTE(JSON_EXTRACT(pData, CONCAT('$.', pJsonArray))), CONCAT('$[', `pIndex`, ']'))) <> '', JSON_UNQUOTE(JSON_EXTRACT(JSON_UNQUOTE(JSON_EXTRACT(pData, CONCAT('$.', pJsonArray))), CONCAT('$[', `pIndex`, ']'))), NULL);
//   END IF;
//   RETURN vReturnVal;
// END




// const User = con_db.define('User',{
//     id: {
//         type: DataTypes.UUID,
//         defaultValue: Sequelize.UUIDV4,
//         primaryKey: true,
//      },
//      firstName:{
//         type:DataTypes.STRING,
//         allowNull:false,
//      },
//      lastName:{
//         type:DataTypes.STRING,
//         allowNull:false,
//      },
//      userType:{
//         type:DataTypes.STRING,
//         isIn:{
//             arg: [['Admin','Client','Customer']],
//             msg:"please enter correct user role"
//         }
//      }
// },{
//     timeStamp:true

//  });