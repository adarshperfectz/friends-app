import React from 'react';
import Style from './SidebarChat.module.scss';
const SidebarChat = (props) => {
	return (
		<div  className={`flex px-2 py-5 hover:bg-[#ebebeb] cursor-pointer`} style={{borderBottom:'1px solid #ebebeb'}}>
			<div className={`w-12`}>
				<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
			</div>
			<div className='ml-2'>
				<h2 className=''>{props.name}</h2>
				<p className='text-xs'>{props.massage}</p>
			</div>
		</div>
	);
}
export default SidebarChat;