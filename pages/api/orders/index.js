import dbConnect from '../../../lib/dbConnect';
import Order from '../../../models/OrderModel';

const handler = async (req, res) => {
	const { method } = req;

	await dbConnect();

	// @title:get orders
	// @status: private
	// @url:api/orders
	if (method === 'GET') {
		try {
			const orders = await Order.find();
			res.status(200).json(orders);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	// @title:post orders
	// @status: private
	// @url:api/orders
	if (method === 'POST') {
		try {
			const order = await Order.create(req.body);
			res.status(201).json(order);
		} catch (err) {
			res.status(500).json(err);
		}
	}
};
export default handler;
