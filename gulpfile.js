const path = require('path');
const { task, src, dest } = require('gulp');

task('build:icons', copyIcons);

function copyIcons() {
	// Copy the icon to node destination
	src(path.resolve('src', 'assets', 'telegram.png'))
		.pipe(dest(path.resolve('dist', 'nodes', 'TelegramUserNode')));

	// Copy the icon to credentials destination
	return src(path.resolve('src', 'assets', 'telegram.png'))
		.pipe(dest(path.resolve('dist', 'credentials', 'TelegramUserCredentialsApi')));
}