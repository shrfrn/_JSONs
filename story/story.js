const story = {
	_id: 's101',
	txt: 'Best trip ever',
	imgUrl: 'http://some-img',
	by: {
		_id: 'u101',
		fullname: 'Ulash Ulashi',
		imgUrl: 'http://some-img',
	},
	loc: {
		// Optional
		lat: 11.11,
		lng: 22.22,
		name: 'Tel Aviv',
	},
	comments: [
		{
			id: 'c1001',
			by: {
				_id: 'u105',
				fullname: 'Bob',
				imgUrl: 'http://some-img',
			},
			txt: 'good one!',
			likedBy: [  // Optional
				{
					_id: 'u105',
					fullname: 'Bob',
					imgUrl: 'http://some-img',
				},
			],
		},
		{
			id: 'c1002',
			by: {
				_id: 'u106',
				fullname: 'Dob',
				imgUrl: 'http://some-img',
			},
			txt: 'not good!',
		},
	],
	likedBy: [
		{
			_id: 'u105',
			fullname: 'Bob',
			imgUrl: 'http://some-img',
		},
		{
			_id: 'u106',
			fullname: 'Dob',
			imgUrl: 'http://some-img',
		},
	],
	tags: ['fun', 'romantic'],
}

const user = {
	_id: 'u101',
	username: 'Muko',
	password: 'mukmuk',
	fullname: 'Muki Muka',
	imgUrl: 'http://some-img',

	following: [
		{
			_id: 'u106',
			fullname: 'Dob',
			imgUrl: 'http://some-img',
		},
	],
	followers: [
		{
			_id: 'u105',
			fullname: 'Bob',
			imgUrl: 'http://some-img',
		},
	],
	likedStoryIds: ['s105', 's122', 's173'], // can also use mini-stories { _id, imgUrl }
	savedStoryIds: ['s104', 's111', 's423'], // can also use mini-stories { _id, imgUrl }
}

// Feed

const loggedinUser = usersCollection.find({ _id: loggedinUser._id })
const following = loggedinUser.following.map(user => ({ _id: user._id, imgUrl: "..."}))
const feed = storiesCollection.find({ 'by._id': { $in: following } }).sort({ _id: -1 })
