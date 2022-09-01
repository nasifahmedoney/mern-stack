const express = require('express')
const router = express.Router();

const {
    getPeople,
    postPeople,
    putPeople,
    deletePeople
} = require('../controller/people')

//router.get('/',getPeople)
//router.post('/',postPeople)
//alternative
router.route('/').get(getPeople).post(postPeople);
router.put('/:id',putPeople)
router.delete('/:id',deletePeople) 




module.exports = router;