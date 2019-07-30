module.exports = {
    addFavorite: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { res_name, res_address, link, img, user_id } = req.body;

        dbInstance.check_favorite_exists([res_name, res_address])
        .then( results => {
            if (!results.data[0]) {
                dbInstance.add_favorite([res_name, res_address, link, img, user_id])
                .then( results => {
                    res.status(200).send(results.data)
                })
                .catch( err => {
                    res.status(500).send(err)
                })
            } else {
                res.status(200).send('Favorite already exists');
            };
        })
        .catch( err => {
            res.status(500).send(err)
        });
    },
    deleteFavorite: (req, res, next) => {
        const dbInstance = req.app.get('db');

        const { favoriteID } = req.body;

        dbInstance.delete_favorite([favoriteID])
        .then( results => {
            res.status(200).send('Favorite has been removed')
        })
        .catch( err => {
            res.status(500).send(err)
        });
    }
}

// check favorite exists

// SELECT * 
// FROM favorites_table
// WHERE favorite_name = $1
// AND favorite_address = $2;

// add favorite

// INSERT INTO favorites_table (res_name, res_address, link, img, user_id)
// VALUES ($1, $2, $3, $4, $5)
// RETURNING *; 

// delete favorite

// DELETE FROM favorites_table
// WHERE id = $1;