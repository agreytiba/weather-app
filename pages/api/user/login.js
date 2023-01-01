import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/UserModel';
import bcrypt from 'bcryptjs';
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.JWT_SECRET;

const handler = async (req, res) => {
	//connect to the database
	await dbConnect();

	if (req.method === 'POST') {
		const { email, password } = req.body;

		// check for user by email
		const user = await User.findOne({ email });
   
		if (user && (await bcrypt.compare(password, user.password))) {
			
      const token = sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
              username: user.name,
              id:user._id
            },
            secret
        );

        const serialised = serialize("OursiteJWT", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/",
        });

        res.setHeader("Set-Cookie", serialised);

            res.status(200).json({
                name: user.name,
				email: user.email,
				phone: user.phone,
                isAdmin: user.isAdmin,
                token
            });
		} else {
			res.status(400).json('invalid credentials');
		}
	}
};

export default handler;
