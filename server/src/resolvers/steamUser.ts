import { MyContext } from 'src/types';
import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { OwnedGame, UserSummary } from 'type-steamapi';

@Resolver()
export class SteamUserResolver {
  @Query(() => UserSummary, { nullable: true })
  async steamProfileSummary(
    @Arg('url') url: string,
    @Ctx() { steam }: MyContext
  ) {
    try {
      const steamId = await steam.resolve(url);

      const profile = await steam.getUserSummary(steamId);

      return profile ? profile[0] : null;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  @Query(() => String, { nullable: true })
  async steamId(@Arg('url') url: string, @Ctx() { steam }: MyContext) {
    try {
      const steamId = await steam.resolve(url);

      return steamId;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  @Query(() => [OwnedGame], { nullable: true })
  async steamOwnedApps(@Arg('url') url: string, @Ctx() { steam }: MyContext) {
    try {
      const steamId = await steam.resolve(url);

      const ownedGames = await steam.getUserOwnedGames(steamId);

      return ownedGames;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  @Query(() => [OwnedGame], { nullable: true })
  async steamCommonApps(
    @Arg('urls', () => [String]) urls: string[],
    @Ctx() { steam }: MyContext
  ) {
    const numberOfUrls = urls.length;

    if (numberOfUrls <= 1) {
      return null;
    }

    try {
      const steamIds = await Promise.all(
        urls.map(async url => await steam.resolve(url))
      );

      const allAppsMap: Record<string, OwnedGame> = {};
      const appIdCountMap: Record<string, number> = {};

      await Promise.all(
        steamIds.map(async steamId => {
          const userApps = await steam.getUserOwnedGames(steamId);
          if (userApps) {
            userApps.forEach(app => {
              const { appId } = app;

              // add app to map (storing it in map for quick access)
              allAppsMap[appId] = app;

              // counting how many of the users own this app
              const current = appIdCountMap[appId];
              if (current) {
                appIdCountMap[appId] = current + 1;
              } else {
                appIdCountMap[appId] = 1;
              }
            });
          }
          return userApps;
        })
      );

      const commonGames: OwnedGame[] = [];

      Object.entries(appIdCountMap).forEach(([appId, appearances]) => {
        // if app appeared for every user, add it to array
        if (appearances >= numberOfUrls) {
          commonGames.push(allAppsMap[appId]);
        }
      });

      return commonGames;
    } catch (error) {
      console.log(error);

      return null;
    }
  }
}
