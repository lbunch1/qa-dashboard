import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("products")
  let bodyObject
  if (req.method === 'POST') {
      bodyObject = JSON.parse(req.body)
      let myInsert = await db.collection('report').insertOne(bodyObject)
      res.json({message: 'ok'})
 }
}
