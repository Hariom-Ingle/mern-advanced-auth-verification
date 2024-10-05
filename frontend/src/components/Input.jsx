import { motion } from "framer-motion";

const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-purple-400' />  
			</div>
			<input
				{...props}
				className='w-full pl-10 pr-3 py-2 bg-gray-900 bg-opacity-80 rounded-lg border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 text-white transition duration-200'
			/>
		</div>
	);
};

export default Input;
