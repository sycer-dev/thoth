import { Listener } from 'discord-akairo';
import { Guild } from 'discord.js';

export default class GuildCreateListener extends Listener {
	public constructor() {
		super('guildCreate', {
			category: 'client',
			emitter: 'client',
			event: 'guildCreate',
		});
	}

	public exec(guild: Guild): void {
		this.client.logger.info(`[NEW GUILD] Joined ${guild.name} with ${guild.memberCount} members.`);
	}
}
