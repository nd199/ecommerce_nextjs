import clientPromise from "@/lib/mongodb";

export default async function handler(req, res, next) {
  if (req.method == "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("EcommerceNextjs");

      const { category } = req.query;
      let query = {};

      if (category == "new") {
        query = { isNewArrival: true };
      }

      const items = await db
        .collection("Clothes")
        .find(query)
        .limit(category === "new" ? 6 : 20)
        .toArray();

      res.status(200).json(items);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ success: false, error: "Database connection failed" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ success: false, message: `Method ${req.method} not allowed` });
  }
}
