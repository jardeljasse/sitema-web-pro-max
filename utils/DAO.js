//DAO => DATA ACCESS OBJECT

import { connect } from "mongoose"

export const connectToDB = async () => {

    await connect ("mongodb://localhost:27017/sistema-web-pro-max")
}