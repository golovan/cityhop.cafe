import { Country, type Scene } from '$lib/types';
import { stations } from './stations';

const drives: Omit<Scene, 'type'>[] = [
	{
		name: 'Chicago',
		videoID: '9Prtp_eNUiI',
		offset: 10,
		tags: ['night'],
		suggestedTrack: stations['R&B/Hip-Hop Radio'],
		country: Country.us
	},
	{
		name: 'Los Angeles',
		videoID: '_gJe9JPgwLM',
		offset: 30,
		suggestedTrack: stations['Top Hits Radio'],
		country: Country.us
	},
	{
		name: 'Honolulu',
		videoID: '-GSHhsSPcdo',
		offset: 40,
		suggestedTrack: stations['Tropical House Radio'],
		country: Country.us
	},
	{
		name: 'New York',
		videoID: 'UPrPATfWJ2g',
		offset: 50,
		tags: ['night'],
		suggestedTrack: stations['VaporFunk Station: Vaporwave Radio'],
		country: Country.us
	},
	{
		name: 'Seattle',
		videoID: 'fkps18H3SXY',
		offset: 50,
		tags: ['day'],
		suggestedTrack: stations['Relaxing Jazz Radio'],
		country: Country.us
	},

	{
		name: 'Miami',
		videoID: 'Cod_ggrs69U',
		offset: 48,
		tags: ['night'],
		suggestedTrack: stations['Synthwave Radio'],
		country: Country.us
	},
	{
		name: 'Mumbai',
		videoID: '0o8PlX0JUn0',
		offset: 28,
		tags: ['night'],
		suggestedTrack: stations['Bollywood Lofi Radio'],
		country: Country.india
	},
	{
		name: 'Mexico City',
		videoID: 'JCXH_WyC8A4',
		suggestedTrack: stations['Spanish Hits Radio'],
		tags: ['evening', 'night'],
		country: Country.mexico
	},
	{
		name: 'Osaka',
		videoID: 'GgOTV7VrlPw',
		offset: 15,
		tags: ['night'],
		country: Country.japan
	},
	{
		name: 'Tokyo',
		videoID: 'GPbBZCrQbzI',
		tags: ['day'],
		suggestedTrack: stations['Japanese City Pop Radio レコード 昭和ポップス'],
		country: Country.japan
	},
	{
		name: 'Paris',
		videoID: 'lN43inpI2lk',
		offset: 30,
		suggestedTrack: stations['Paris Cafe Radio: Positive Bossa Nova Jazz Music'],
		tags: ['day'],
		country: Country.france
	},
	{
		name: 'Hangzhou',
		videoID: 'jAe290vn-gk',
		offset: 200,
		tags: ['day', 'rain'],
		country: Country.china
	},
	{
		name: 'Taipei',
		videoID: 'P8Uh9f0EaU8',
		offset: 60,
		tags: ['day'],
		suggestedTrack: stations['Chinese Pop Radio'],
		country: Country.taiwan
	},
	{
		name: 'Seoul',
		videoID: 'KGAIumGxQeY',
		tags: ['evening'],
		country: Country.korea
	},
	{
		name: 'Busan',
		videoID: 'XPRqAkL7Kfk',
		tags: ['night'],
		suggestedTrack: stations['Korean Indie/R&B/Hip-Hop Radio'],
		country: Country.korea
	}
];

export default drives.map((scene) => ({ ...scene, type: 'drive' })) as Scene[];
