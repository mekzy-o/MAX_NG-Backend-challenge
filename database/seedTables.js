const moment = require("moment");
const dbClient = require("./index");

const queryString = `
        
  INSERT INTO comments("createdon", "comment", "ipaddress", "filmid")
  VALUES('${moment(new Date())}', 'GoodBoy Big man', 8745521633, 2),
        ('${moment(new Date())}', 'GoodBoy Big man', 1758964523, 2),
        ('${moment(new Date())}', 'GoodBoy Big man', 5823642528, 2),
        ('${moment(new Date())}', 'GoodBoy Big man', 8745521633, 2),
        ('${moment(new Date())}', 'GoodBoy Big man', 3254125869, 2),
        ('${moment(new Date())}', 'GoodBoy Big man', 5823642528, 2),
        ('${moment(new Date())}', 'GoodBoy Big man', 1758964523, 2),
        ('${moment(new Date())}', 'GoodBoy Big man', 7596841530, 2);
`;

dbClient.query(queryString);
