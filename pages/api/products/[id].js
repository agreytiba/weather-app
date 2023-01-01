import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/ProductModel';

export default async function handler(req, res) {
	const { method, query: { id } } = req;

	// connect to database
	dbConnect();

	//  @title:get a single product
	//  @method: GET,findById()
	//  @status: private
	//  @url: api/products/:id
	if (method === 'GET') {
		try {
			const product = await Product.findById(id);
			res.status(200).json(product);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	//  @title:update the product inf0
	//  @status: private
	//  @url: api/products/:id
	if (method === 'PUT') {
		try {
			const product = await Product.findByIdAndUpdate(id, req.body, {
				new: true
			});
			res.status(200).json(product);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	// @delete a product
	// @status: private
	// url: api/products/:id
	if (method === 'DELETE') {
		try {
			const product = await Product.findByIdAndDelete(id);
			res.status(200).json('The product has been deleted');
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
