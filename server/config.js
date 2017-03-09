export const port = process.env.ST_PORT || 8888;

export const FSenvironment = process.env.FS_ENVIRONMENT || 'integration';

export const FSappkey = process.env.FS_APPKEY || configError('FS_APPKEY is required');

function configError(message) {
	console.error(message);
	process.exit(1);
}
