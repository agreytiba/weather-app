import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/ProductModel';

export default async function handler(req, res) {
	const { method } = req;

	// connect to database
	dbConnect();

	// @title:get products
	// @status: public
     //@url:api/products
	if (method === 'GET') {
		try {
			const products = await Product.find();
			res.status(200).json(products);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	// @title:post products
	// @status: private
    // @url:api/products
	if (method === 'POST') {
		try {
			if (req.body == null) {
				res.status(400).json({
					message: 'no data'
				});
            }
            else {
                const product = await Product.create(req.body);
			res.status(201).json(product);
            }
			
		} catch (err) {
			res.status(500).json(err);
		}
	}


}
