import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/UserModel';


const handler = async (req, res) => {
	//connect to the database
	await dbConnect();
    const { method } = req
    
    // @title:Delete user
    // @status: Private
    // @url:"api/user/:id"
 if (method === "DELETE") {
        try {
            const user = await User.findByIdAndDelete(id);
            res.status(200).json(`The user with ${user.id} has been deleted`)
        } catch (err) {
            res.status(500).json(err)
        }
        
    }
};

export default handler;
