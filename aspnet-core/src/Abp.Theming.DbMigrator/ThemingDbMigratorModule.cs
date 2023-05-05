using Abp.Theming.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace Abp.Theming.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(ThemingEntityFrameworkCoreModule),
    typeof(ThemingApplicationContractsModule)
    )]
public class ThemingDbMigratorModule : AbpModule
{

}
