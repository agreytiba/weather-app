import dbConnect from '../../../lib/dbConnect';
import Order from '../../../models/OrderModel';

export default async function handler(req, res) {
	const { method, query: { id } } = req;

	// connect to database
	dbConnect();

	// @title:get a single order by id
	// @status: private
	// @url:api/orders/:id
	if (method === 'GET') {
		try {
			const order = await Order.findById(id);
			res.status(200).json(order);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	// @title:edit  an order by id
	// @status: private
	// @url:api/orders/:id
	if (method === 'PUT') {
		try {
			const order = await Order.findByIdAndUpdate(id, req.body, {
				new: true
			});
			res.status(200).json(order);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	// @title:delete  an order by id
	// @status: private
	// @url:api/orders/:id
	if (method === 'DELETE') {
		try {
			const order = await Order.create(req.body);
			res.status(201).json(order);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
