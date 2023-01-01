import bcrypt from 'bcryptjs';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/UserModel';
const handler = async (req, res) => {
	await dbConnect();
    
	// @title:Post user
    // @status: Private
    // @url:"api/user"
	if (req.method === 'POST') {

		// check for empty field in submitted data
		const { name, email, password, phone, isAdmin } = req.body;
		if (!name || !email || !password || !phone) {
			res.status(400).json({
				message: 'empty input fields'
			});
		}

		// email validation using regex
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			
			res.status(400).json({
				message: 'invalid email'
			});
		}

		//check if user exists
		const userExists = await User.findOne({ email });
		if (userExists) {
			res.status(400).json({
				message: 'user already exists'
			});
		}
		
        // password length
		if (password.length < 8) {
			// if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\])$/.test(password)) {
			// }
			res.json(400).json({
				message: 'password length should be greater than 8'
			});
		}
		if (!/^[a-zA-Z]*$.{4}/.test(name)) {
			res.status(400).json({
				message: 'name should have length more tha 4 charater and all string'
			});
		}
		// Hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		//  create user
		const user = await User.create({
			name,
			email,
			phone,
			isAdmin,
			password: hashedPassword
		});
		if (user) {
			res.status(201).json({
				_id: user.id,
				name: user.name,
				email: user.email,
				phone: user.phone,
				isAdmin: user.isAdmin
			});
		} else {
			res.status(400).json('invalid user data');
		}
	}
};

export default handler;
