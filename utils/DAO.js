//DAO => DATA ACCESS OBJECT

import { connect } from "mongoose"

export const connectToDB = async () => {

    await connect ("mongodb://localhost:27017/plataforma-crei")
    // await connect ("mongodb+srv://jardeljasse:jardeljasse18@cluster0.otcsboc.mongodb.net/plataforma-crei")
}