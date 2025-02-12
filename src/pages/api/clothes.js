import clientPromise from "@/lib/mongodb";

export default async function handler(req, res, next) {
  if (req.method == "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("EcommerceNextjs");

      const { category } = req.query;
      let query = {};
      let items;

      if (category == "new") {
        query = { isNewArrival: true };
      }

      items = await db
        .collection("Clothes")
        .find(query)
        .limit(category === "new" ? 6 : 20)
        .toArray();

      if (category === "topSelling") {
        items = items.sort((a, b) => b.rating - a.rating).slice(0, 6);
      }

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
