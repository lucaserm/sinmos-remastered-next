import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { UserGroupIcon } from '@heroicons/react/24/solid';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';

export const items = [
	{
		title: 'Dashboard',
		path: '/',
		icon: (
			<SvgIcon fontSize='small'>
				<ChartBarIcon />
			</SvgIcon>
		),
	},
	{
		title: 'Estudantes',
		path: '/student',
		icon: (
			<SvgIcon fontSize='small'>
				<UsersIcon />
			</SvgIcon>
		),
	},
	{
		title: 'Usuários',
		path: '/users',
		icon: (
			<SvgIcon fontSize='small'>
				<UserGroupIcon />
			</SvgIcon>
		),
	},
	{
		title: 'Companies',
		path: '/companies',
		icon: (
			<SvgIcon fontSize='small'>
				<ShoppingBagIcon />
			</SvgIcon>
		),
	},
];
